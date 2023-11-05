import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import "./App.css";
import CartDroppable from "./Droppable";
import FruitDraggable from "./Components/Draggables/Draggable";

const App = () => {
  const fruits = ["Apple", "Banana", "Lemon", "Pear", "Mango"];
  const [cartItems, setCartItems] = useState<string[]>([]);

  const addItemsToCart = (e: DragEndEvent) => {
    const newItem = e.active.data.current?.title;
    if (e.over?.id !== "cart-droppable" || !newItem) return;
    const temp = [...cartItems];
    temp.push(newItem);
    setCartItems(temp);
  };

  return (
    <DndContext onDragEnd={addItemsToCart}>
      <main className="main">
        <div className="fruit-list-section">
          <h1>Fruit List</h1>
          <ul className="fruit-list">
            {fruits.map((fruit) => (
              <FruitDraggable key={fruit}>{fruit}</FruitDraggable>
            ))}
          </ul>
        </div>
        <div className="cart-section">
          <h1>My Cart</h1>
          <CartDroppable items={cartItems} />
        </div>
      </main>
    </DndContext>
  );
};

export default App;