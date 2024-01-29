import Link from "next/link.js";
import ItemList from "./item-list.js";

function Page() {
  return (
    <main>
      <h2 className="text-3xl font-bold m-2">Shopping List</h2>
      <ItemList />
    </main>
  );
}

export default Page;
