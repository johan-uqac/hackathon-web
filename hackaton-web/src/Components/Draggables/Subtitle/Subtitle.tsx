import { useDraggable } from "@dnd-kit/core";
import "./Subtitle.css"
import { CSS } from "@dnd-kit/utilities";
import Widget from "../../../types/Widget";

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
      className="subtitle-item"
      style={{ transform: CSS.Translate.toString(transform), width: calculateWidth(children.size) }}
      {...attributes}
      {...listeners}
    >
      <div className="machine-name_container">
        <span className="machine-id">{children.content[0]}</span>
        <span className="machine-name">{children.content[1]}</span>
      </div>
      <span className="machine-desc">{children.content[2]}</span>
    </div>
  );
};