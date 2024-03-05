"use client";
import { useState } from "react";
import Item from "./item.js";
import GItem from "./gitem.js";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category" || sortBy === "gcategory") {
      return a.category.localeCompare(b.category);
    }
  });

  //Start - Added for challenge task here
  const groupedItems = {};
  sortedItems.forEach((item) => {
    const category = item.category;
    if (!groupedItems[category]) {
      groupedItems[category] = [];
    }
    groupedItems[category].push(item);
  });
  //End - Added for challenge task

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  const handleSortByGCategory = () => {
    setSortBy("gcategory");
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
            sortBy === "category" ? "bg-orange-400" : "bg-orange-500"
          }`}
        >
          Category
        </button>
        <button
          onClick={handleSortByGCategory}
          className={`p-1 m-2 w-28 ${
            sortBy === "gcategory" ? "bg-orange-400" : "bg-orange-500"
          }`}
        >
          Group Category
        </button>
        <label
          class="absolute top-20 left-240  text-gray-600 text-xs italic"
          for="group-category"
        ></label>
      </div>
      <ul>
        {/* {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))} */}
        {console.log(groupedItems)}
        {sortBy === "name" || sortBy === "category"
          ? sortedItems.map((item) => <Item key={item.id} {...item} />)
          : Object.entries(groupedItems).map(([category, items]) => (
              <GItem key={category} category={category} items={items} />
            ))}
      </ul>
    </div>
  );
}
