import React, { useState, useEffect, useReducer, prevState } from "react";
import { db } from "../../firebaseConfig/firebase";
import { FaUserInjured } from "react-icons/fa";
import {
  collection,
  collectionGroup,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import { IoLogInSharp } from "react-icons/io5";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { useCollectionData } from "react-firebase-hooks/firestore";
import icon from "../../../Assets/shared/active__icon.svg";

const DailyLogin = ({ month, test }) => {
  let currentYear = new Date().getFullYear();
  const [counter, setcounter] = useState();

  const q = query(collection(db, "Nurses"), where("Status", "==", `Online`));
  useCollectionData(q);

  useEffect(() => {
    async function getrequests() {
      const snapshot = await getCountFromServer(q);
      setcounter(snapshot.data().count);
    }
    getrequests();
  });
  return (
    <div className="counter">
      <div className="counter__container">
        <img src={icon} alt="" className="counter__icon" />
        <p className="counter__number">07</p>
      </div>
      <h5 className="counter__title">Active</h5>
    </div>
  );
};

export default DailyLogin;
