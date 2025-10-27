import React, { useState, useEffect, useReducer, prevState } from "react";
import { db } from "../../firebaseConfig/firebase";
import { FaUserInjured } from "react-icons/fa";
import icon from "../../../Assets/shared/daily__icon.svg";

import {
  collection,
  collectionGroup,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import moment from "moment";
import { useCollectionData } from "react-firebase-hooks/firestore";

const DailyCounter = () => {
  let currentYear = new Date().getFullYear();
  const [counter, setcounter] = useState();
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  const q = query(
    collectionGroup(db, " " + currentYear),
    where("Day", "==", `${moment(dateState).format("D")}`)
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
    <div className="counter">
      <div className="counter__container">
        <img src={icon} alt="" className="counter__icon" />
        <p className="counter__number">56</p>
      </div>
      <h5 className="counter__title">Daily</h5>
    </div>
  );
};

export default DailyCounter;
