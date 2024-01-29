"use client";
import { useState } from "react";
import Item from "./item.js";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  return (
    <div>
      <div>
        <label>Sort by: </label>
        <button
          onClick={handleSortByName}
          className={`p-1 m-2 w-28 ${
            sortBy === "name" ? "bg-orange-400" : "bg-orange-500"
          }`}
        >
          Name
        </button>
        <button
          onClick={handleSortByCategory}
          className={`p-1 m-2 w-28 ${
            sortBy === "name" ? "bg-orange-500" : "bg-orange-400"
          }`}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          // console.log(item)
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
