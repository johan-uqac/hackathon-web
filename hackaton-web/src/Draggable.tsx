import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';


function Draggable() {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'unique-id',
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    backgroundColor: 'red',
  };
  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
        hello world
    </button>
  );
}

export default Draggable;