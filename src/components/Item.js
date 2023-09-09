import React, {useState} from "react";

function Item({ name, category }) {
  const [onCart, setOnCart] = useState(true);

  function handleCart ( ) {
    setOnCart((onCart) => !onCart);
  }

const addOnCart = onCart ? "Add to Cart" : "Remove From Cart";
  return (
      <li className={onCart? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addOnCart} onClick={handleCart}>{onCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
