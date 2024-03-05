"use client";
import React, { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(item);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-black">
        {/* <div className="p-2 bg-slate-900 text-black max-w-sm w-full"> */}
        <div className="mb-2">
          <input
            placeholder="Item name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          />
        </div>
        <div className="flex justify-between">
          <div className="w-1/2 ">
            <input
              type="number"
              min="1"
              max="99"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              required
              className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            />
          </div>
          <div className="flex justify-between">
            <select
              className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          +
        </button>
      </div>
      {/* </div> */}
    </form>
  );
};

export default NewItem;
