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
import "../../Home/DashCounters/Counters.scss";
import icon from "../../../Assets/shared/daily__icon.svg";

const NurseUserCounter = ({ month, test }) => {
  let currentYear = new Date().getFullYear();
  const [counter, setcounter] = useState(100);

  useEffect(() => {
    async function getrequests() {
      const coll = query(
        collectionGroup(db, " " + currentYear),
        where("Month", "==", month),
        where("Nurse_Id", "==", test)
      );
      const snapshot = await getCountFromServer(coll);
      setcounter(snapshot.data().count);
    }
    getrequests();
  });
  return (
    <div className="counter">
      <div className="counter__container">
        <img src={icon} alt="" className="counter__icon" />
        <p className="counter__number">{counter}</p>
      </div>
      <h5 className="counter__title">Monthly Clients</h5>
    </div>
  );
};

export default NurseUserCounter;
