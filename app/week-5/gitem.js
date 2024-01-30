import React from "react";

export default function GItem({ category, items }) {
  return (
    <div>
      <h3 className="capitalize text-xl">{category}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="p-2 m-4 bg-slate-900 max-w-sm">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <div className="text-sm">
              Buy {item.quantity} in {item.category}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
