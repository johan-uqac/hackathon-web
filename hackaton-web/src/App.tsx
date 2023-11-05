import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import "./App.css";
import WidgetList from "./Sections/WidgetsList/WidgetList";
import Widget from "./types/Widget";
import PDFRendering from "./Sections/PDFRendering/PDFRendering";

const App = () => {
  const [pdfWidgets, setPdfWidgets] = useState<Widget[]>([]);

  const addWidgetToPdf = (e: DragEndEvent) => {
    if (e.over?.id !== "pdf-droppable") return;
    setPdfWidgets([...pdfWidgets, e.active.data.current as Widget]);
  };

  return (
    <DndContext onDragEnd={addWidgetToPdf}>
      <div className="container">
        <main className="main">
          <WidgetList />
          <PDFRendering cartItems={pdfWidgets}/>
        </main>
      </div>
    </DndContext>
  );
};

export default App;