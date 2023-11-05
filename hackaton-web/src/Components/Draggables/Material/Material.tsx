import { useDraggable } from '@dnd-kit/core';
import './Material.css';
import { CSS } from "@dnd-kit/utilities";
import Widget from "../../../types/Widget";
import { createBasicBlock } from "../../../Utils/LoadJson";

interface DraggableProps {
  children: Widget;
}


export default function Material({children}: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: children.id,
    data: { content: children.content, size: children.size, component: children.component }
  });

  const data = createBasicBlock();

  console.log(data)
  function calculateWidth(size: Widget["size"]) {
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
      className="material-item"
      style={{ transform: CSS.Translate.toString(transform), width: calculateWidth(children.size) }}
      {...attributes}
      {...listeners}
    >
      <span>toto</span>
    </div>
  )
}

// img
// number of articles
// typeof article