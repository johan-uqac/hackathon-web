import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import "./Draggable.css";

export default function Draggable(props: any) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className='draggable1'>
      {props.children}
    </div>
  );
}