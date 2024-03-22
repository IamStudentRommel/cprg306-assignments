"use client";
import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
// import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

const Page = () => {
  const { user, firebaseSignOut } = useUserAuth();
  // const [items, setItems] = useState('itemsData');
  const [selectedItemName, setSelectedItemName] = useState("");
  const [itemData, setItemData] = useState([]);

  const handleLogout = async () => {
    await firebaseSignOut();
    window.location.href = "/week-10";
  };

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

  const handleAddItem = async (newItem) => {
    // setItems([...items, newItem]);
    const itemToAdd = {
      ...newItem,
    };

    const addedItem = await addItem(user.uid, itemToAdd);
    setItemData((prevItems) => [...prevItems, addedItem]);
  };

  async function loadItems() {
    try {
      const itemsList = await getItems(user.uid);
      setItemData(itemsList);
    } catch (error) {
      console.error("Error load Items:", error);
    }
  }

  useEffect(() => {
    if (!user) {
    } else {
      loadItems();
    }
  });

  return (
    <main>
      {/* User information and sign out */}
      <div className="flex items-center flex-grow">
        <div className="text-lg ml-11">
          <p className="inline-block">
            {user && user.displayName} {user && user.email}
          </p>
          <div className="container">
            <Link
              href="/week-10"
              onClick={handleLogout}
              className="text-lg hover:underline  text-blue-500"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 w-full p-8 flex">
        <div className="pr-4">
          <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
          <h3 className="text-xl font-bold">Add New Item</h3>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={itemData} onItemSelect={handleItemSelect} />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">Meal Ideas</h1>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
};

export default Page;
