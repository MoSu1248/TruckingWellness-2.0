import { useCollectionData } from "react-firebase-hooks/firestore";
import { setDoc, updateDoc, doc, deleteDoc, orderBy } from "firebase/firestore";
import { collection, limit } from "firebase/firestore";
import { collectionGroup, query, where, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig/firebase";
import "./recentPatients.css";
import Folder from "../../Resources/folder.png";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AppointFilter from "./PatientsOptions";
import AlertedPatients from "./AlertedPatients";

export default function ChildrenList({ path, id }) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const cdate = new Date().getDate();
  const currentDate = new Date();
  const currentYears = currentDate.getFullYear();

  let q = query(
    collectionGroup(db, "Capture Data"),
    where("Flagged", "==", "Yes"),
    // where("date", "==", `${day}, ${month} ${cdate}, ${currentYears}`),
    limit(10)
  );
  const [docs, loading, error] = useCollectionData(q);

  const [RequestCount, setRequestCount] = useState(0);

  return (
    <>
      <div class="RecenetFlagged-container">
        <h6 className="request-login-heading">
          Flagged Users: <span>5%</span>
        </h6>
        <div className="flagged-bars">
          <div className="grid-bar-item bar__negative">
            <p>5%</p>
            <div className=" grid-bar negative">flagged</div>
          </div>
          <div className="grid-bar-item bar__positive">
            <p> 95%</p>
            <div className=" grid-bar positive">clean</div>
          </div>
        </div>

        <AlertedPatients />
      </div>
    </>
  );
}
