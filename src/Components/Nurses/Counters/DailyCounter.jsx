import React, { useState, useEffect, useReducer, prevState } from "react";
import { db } from "../../firebaseConfig/firebase";
import { FaUserInjured } from "react-icons/fa";
import { useCollectionData } from "react-firebase-hooks/firestore";

import {
  collection,
  collectionGroup,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import { IoLogInSharp } from "react-icons/io5";
import icon from "../../../Assets/shared/daily__icon.svg";

export default function DailyCounter({ path }) {
  const q = collection(db, path);
  const [docs, loading, error] = useCollectionData(q);

  let currentYear = new Date().getFullYear();
  const [counter, setcounter] = useState(20);

  useEffect(() => {
    async function getrequests() {
      const snapshot = await getCountFromServer(q);
      setcounter(snapshot.data().count);
    }
    getrequests();
  });

  return (
    <>
      <div className="counter">
        <div className="counter__container">
          <img src={icon} alt="" className="counter__icon" />
          <p className="counter__number">{counter}</p>
        </div>
        <h5 className="counter__title">Daily Logins</h5>
      </div>
    </>
  );
}
