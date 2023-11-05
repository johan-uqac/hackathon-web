import { useDroppable } from "@dnd-kit/core";
import "./Droppable.css";
import Widget from "../../types/Widget";
import Title from "../Draggables/Title/Title";

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
        <Title key={`${item.content}-${idx}`}>{item}</Title>
      ))}
    </div>
  );
};

export default PDFDroppable;