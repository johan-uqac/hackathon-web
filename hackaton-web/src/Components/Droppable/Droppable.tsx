import { useDroppable } from "@dnd-kit/core";
import "./Droppable.css";
import Widget from "../../types/Widget";

interface ICartDroppable {
  items: Widget[];
}

const PDFDroppable = ({items}: ICartDroppable) => {
  const { setNodeRef } = useDroppable({
    id: "pdf-droppable"
  });

  function calculateWidth(size: string) {
    console.log(size)
    switch (size) {
      case "small":
        return "25%";
      case "medium":
        return "50%";
      case "large":
        return "100%";
    }
  }

  return (
    <ul className="pdf" ref={setNodeRef}>
      {items.map((item, idx) => (
        <div key={`${item}-${idx}`} className="pdf-item" style={{width: calculateWidth(item.size)}}>
          {item.content}
        </div>
      ))}
    </ul>
  );
};

export default PDFDroppable;