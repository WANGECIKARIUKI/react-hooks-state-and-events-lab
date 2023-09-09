import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  
  const[isDarkTheme , setDarkTheme] = useState(false);
  

  function handleClick () {
    setDarkTheme(() => !isDarkTheme);
  }
  const appClass = isDarkTheme ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button
        onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
      
    </div>
  );
}

export default App;
