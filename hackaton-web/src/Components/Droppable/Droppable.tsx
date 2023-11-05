import { useDroppable } from "@dnd-kit/core";
import "./Droppable.css";
import Widget from "../../types/Widget";
import Title from "../Draggables/Title/Title";
import React from "react";
import Subtitle from "../../Components/Draggables/Subtitle/Subtitle"
import Machine from "../Draggables/Machine/Machine";
import Material from "../Draggables/Material/Material";


interface IPDFDroppable {
  items: Widget[];
}

const PDFDroppable = ({items}: IPDFDroppable) => {
  const { setNodeRef } = useDroppable({
    id: "pdf-droppable"
  });

  return (
    <div className="pdf" id="pdf" ref={setNodeRef}>
      {items.map((item, idx) => (
        <React.Fragment key={item.id}>
          {item.component === "title" && <Title>{item}</Title>}
          {item.component === "subtitle" && <Subtitle>{item}</Subtitle>}
          {item.component === "machine" && <Machine>{item}</Machine>}
          {item.component === "material" && <Material>{item}</Material>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PDFDroppable;