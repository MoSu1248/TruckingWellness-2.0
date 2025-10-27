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
import "./Counters.scss";
import moment from "moment";
import { useCollectionData } from "react-firebase-hooks/firestore";
import icon from "../../../Assets/shared/monthly__icon.svg";

const MonthlyCounter = () => {
  let currentYear = new Date().getFullYear();
  const [counter, setcounter] = useState();
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  const q = query(
    collectionGroup(db, " " + currentYear),
    where("Month", "==", `${moment(dateState).format("MMMM")}`)
  );
  useCollectionData(q);

  useEffect(() => {
    async function getrequests() {
      const snapshot = await getCountFromServer(q);
      setcounter(snapshot.data().count);
    }
    getrequests();
  });

  return (
    <div className="counter monthly-counter">
      <div className="counter__container">
        <img src={icon} alt="" className="counter__icon"/>
        <p className="counter__number">203</p>
      </div>
      <h5 className="counter__title">Monthly</h5>
    </div>
  );
};

export default MonthlyCounter;
