import React, { useState } from "react";
import Item from "./Item";


function ShoppingList({ items }) {

  const [selectedCategory, setCategory] = useState("All")

  const useNewSelection = (e) => {
    console.log(e.target.value)
    setCategory((e.target.value)) 
  }

  const itemsToDisplay = items.filter(item => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  })

  console.log(itemsToDisplay)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={useNewSelection} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
