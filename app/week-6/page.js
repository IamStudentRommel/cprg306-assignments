"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main class="bg-slate-950 p-2 m-2">
      <div className=" max-w-sm w-full">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <h3 class="text-xl font-bold">Add New Item</h3>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
};

export default Page;
