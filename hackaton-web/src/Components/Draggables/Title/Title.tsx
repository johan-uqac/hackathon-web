import { useDraggable } from "@dnd-kit/core";
import "./Title.css"
import { CSS } from "@dnd-kit/utilities";
import Widget from "../../../types/Widget";

interface DraggableProps {
  children: Widget;
}

export default function Title({children}: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: children.id,
    data: { content: children.content, size: children.size, component: children.component }
  });

  function calculateWidth(size: Widget["size"]) {
    if (children.id === '1')
      console.log(children)
    switch (size) {
      case "small":
        return "50%";
      case "medium":
        return "75%";
      case "large":
        return "100%";
    }
  }

  return (
    <div
      ref={setNodeRef}
      className="title-item"
      style={{ transform: CSS.Translate.toString(transform), width: calculateWidth(children.size) }}
      {...attributes}
      {...listeners}
    >
      <span className="title">{children.content[0]}</span>
      <span className="subtitle">{children.content[1] + ' - ' + children.content[2]}</span>
    </div>
  );
};