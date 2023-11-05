import { useDraggable } from "@dnd-kit/core";
import "./Machine.css"
import { CSS } from "@dnd-kit/utilities";
import Widget from "../../../types/Widget";

interface DraggableProps {
  children: Widget;
}

export default function Machine({children}: DraggableProps) {
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
      className="emplacement-item"
      style={{ transform: CSS.Translate.toString(transform), width: calculateWidth(children.size) }}
      {...attributes}
      {...listeners}
    >
      <span className="emplacement">{"Emplacement : " + children.content[0]}</span>
    </div>
  );
};