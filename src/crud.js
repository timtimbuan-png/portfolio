// src/components/CRUD.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function CRUD() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const fetchData = async () => {
    const snapshot = await getDocs(collection(db, "items"));
    setData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const addItem = async () => {
    await addDoc(collection(db, "items"), { name });
    setName("");
    fetchData();
  };

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "items", id));
    fetchData();
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Add item" />
      <button onClick={addItem}>Add</button>
      <table border="1">
        <thead>
          <tr><th>Name</th><th>Action</th></tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td><button onClick={() => deleteItem(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
