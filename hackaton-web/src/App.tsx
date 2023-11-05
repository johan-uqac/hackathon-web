import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import "./App.css";
import WidgetList from "./Sections/WidgetsList/WidgetList";
import Widget from "./types/Widget";
import PDFRendering from "./Sections/PDFRendering/PDFRendering";
import generatePDF, { Options } from "react-to-pdf";
import { createBasicBlock, createCategoryBlock } from "./Utils/LoadJson";

const options: Options = {
  filename: "Fiche_Broyeur_M1-B.pdf",
  page: {
    margin: 0
  }
};


function createWidgets() {
  let basicBlocks = createBasicBlock();
  let categoryBlocks = createCategoryBlock();
  let sizes = ["large", "medium", "small"];

  console.log(basicBlocks)
  console.log(categoryBlocks)
  
  function getTitleWidgets() {
    let widgets: Widget[] = [];
    for (let size in sizes) {
      widgets.push({
        id: basicBlocks[0].itemId.toString() + size,
        content: basicBlocks[0].data,
        size: sizes[size] as Widget["size"],
        component: "title"
      })
    }
    return widgets;
  }
  
  function getSubtitleWidgets() {
    let widgets: Widget[] = [];
    for (let size in ["large", "medium", "small"]) {
      widgets.push({
        id: basicBlocks[1].itemId.toString() + size,
        content: basicBlocks[1].data.concat(basicBlocks[2].data) as string[],
        size: sizes[size] as Widget["size"],
        component: "subtitle"
      })
    }
    return widgets;
  }

  function getMachineWidgets() {
    let widgets: Widget[] = [];
    for (let size in ["large", "medium", "small"]) {
      widgets.push({
        id: basicBlocks[3].itemId.toString() + size,
        content: basicBlocks[3].data,
        size: sizes[size] as Widget["size"],
        component: "machine"
      })
    }
    return widgets;
  }

  function getMaterialWidgets() {
    let widgets: Widget[] = [];
    for (let size in ["large", "medium", "small"]) {
      widgets.push({
        id: basicBlocks[4].itemId.toString() + size,
        content: basicBlocks[4].data.concat(basicBlocks[4].assetPath ?? "").concat(basicBlocks[5].data.concat(basicBlocks[5].assetPath ?? "")).concat(basicBlocks[6].data.concat(basicBlocks[6].assetPath ?? "")),
        size: sizes[size] as Widget["size"],
        component: "material"
      })
    }
    return widgets;
  }

  return getTitleWidgets().concat(getSubtitleWidgets()).concat(getMachineWidgets()).concat(getMaterialWidgets());
}


const getTargetElement = () => document.getElementById("pdf");

const downloadPdf = () => generatePDF(getTargetElement, options);
const App = () => {
  const [pdfWidgets, setPdfWidgets] = useState<Widget[]>([]);
  let widgets: Widget[] = createWidgets();

  console.log(widgets)

  const addWidgetToPdf = (e: DragEndEvent) => {
    if (e.over?.id !== "pdf-droppable") return;
    setPdfWidgets([...pdfWidgets, e.active.data.current as Widget]);
  };


  return (
    <DndContext onDragEnd={addWidgetToPdf}>
      <div className="container">
        <main className="main">
          <WidgetList widgets={widgets} />
          <div className="separator"></div>
          <div className="pdfContainer">
            <PDFRendering cartItems={pdfWidgets}/>
            <button onClick={downloadPdf}>Download PDF</button>
          </div>
        </main>
      </div>
    </DndContext>
  );
};

export default App;