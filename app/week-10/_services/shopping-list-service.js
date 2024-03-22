import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

async function getItems(userId) {
  //   console.log(userId);
  const querySnapshot = await getDocs(collection(db, "users", userId, "items"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

async function addItem(userId, itemToAdd) {
  const docRef = await addDoc(
    collection(db, "users", userId, "items"),
    itemToAdd
  );
  return docRef.id;
}

export { getItems, addItem };
