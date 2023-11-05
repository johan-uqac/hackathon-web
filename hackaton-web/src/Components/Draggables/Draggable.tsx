import { useDraggable } from "@dnd-kit/core";
import "./Draggable.css"
import { CSS } from "@dnd-kit/utilities";
import Widget from "../../types/Widget";

interface DraggableProps {
  children: Widget;
}

export default function Draggable ({children}: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: children.id,
    data: { content: children.content, size: children.size }
  });

  function calculateWidth(size: Widget["size"]) {
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
    <div
      ref={setNodeRef}
      className="fruit-item"
      style={{ transform: CSS.Translate.toString(transform), width: calculateWidth(children.size) }}
      {...attributes}
      {...listeners}
    >
      {children.content}
    </div>
  );
};