import { useDroppable } from "@dnd-kit/core";
import "./Droppable.css";
import Widget from "../../types/Widget";
import Draggable from "../Draggables/Title/Title";

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
        <Draggable key={`${item.content}-${idx}`}>{item}</Draggable>
      ))}
    </div>
  );
};

export default PDFDroppable;