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

  const Material = ({nbMaterial, name}: any) => {
    return (
        <div>
            <span>{nbMaterial + " " + name}</span>
        </div>
    )
  }

  return (
    <div
      ref={setNodeRef}
      className="material-item"
      style={{ transform: CSS.Translate.toString(transform), width: calculateWidth(children.size) }}
      {...attributes}
      {...listeners}
    >
        <Material nbMaterial={children.content[1]} name={children.content[0]}/>
        <Material nbMaterial={children.content[4]} name={children.content[3]}/>
        <Material nbMaterial={children.content[7]} name={children.content[6]}/>
    </div>
  )
}

// img
// number of articles
// typeof article