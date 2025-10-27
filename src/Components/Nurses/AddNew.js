import React, { useRef } from "react";
import {setDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { collection, getDocs, limit } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

export default function AddNew({ path }) {
  const Login = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const docRef = doc(db, path, Login.current.value);
    await setDoc(docRef, { Login: Login.current.value });

    e.target.reset();
  }

  return (
    <li>
      <form onSubmit={handleSubmit}>
        <input ref={Login} />
        <button type="submit">Add</button>
      </form>
    </li>
  );
}
