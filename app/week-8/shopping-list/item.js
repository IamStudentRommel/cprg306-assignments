import React from "react";

function Item({ name, quantity, category, onSelect }) {
  const handleClick = () => {
    onSelect({ name, quantity, category });
  };

  return (
    <div onClick={handleClick}>
      <li className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="text-sm">
          Buy {quantity} in {category}
        </div>
      </li>
    </div>
  );
}

export default Item;
