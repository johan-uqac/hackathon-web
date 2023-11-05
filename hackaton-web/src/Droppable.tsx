import { useDroppable } from "@dnd-kit/core";
import { FC } from "react";
import "./Droppable.css";

interface ICartDroppable {
  items: string[];
}

const CartDroppable: FC<ICartDroppable> = (props) => {
  const { setNodeRef } = useDroppable({
    id: "cart-droppable"
  });

  return (
    <ul className="cart" ref={setNodeRef}>
      {props.items.map((item, idx) => (
        <div key={`${item}-${idx}`} className="cart-item">
          {item}
        </div>
      ))}
    </ul>
  );
};

export default CartDroppable;