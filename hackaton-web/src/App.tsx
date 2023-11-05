import './App.css';

import {DndContext} from '@dnd-kit/core';

import Draggable from './Components/Draggables/Draggable';
import Droppable from './Droppable';
import { useState } from 'react';

function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>Drag me</Draggable>
  );

  function handleDragEnd(event: any) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }

  return (
    <div className="App">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="inputsDiv">
            <div className='draggablesList'>
              {!isDropped ? draggableMarkup : null}
            </div>
            <div className='droppableDiv'>
              <Droppable>
                  {isDropped ? draggableMarkup : 'Drop here'}
              </Droppable>
            </div>
        </div>
      </DndContext>
      <div className="pdfDiv">
        <span>PDF</span>
      </div>
    </div>
  );
}

export default App;
