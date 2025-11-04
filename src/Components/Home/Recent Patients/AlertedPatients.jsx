import { useCollectionData } from "react-firebase-hooks/firestore";
import { setDoc, updateDoc, doc, deleteDoc, orderBy } from "firebase/firestore";
import { collection, limit } from "firebase/firestore";
import { collectionGroup, query, where, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebaseConfig/firebase";
import "./recentPatients.css";
import Folder from "../../Resources/folder.png";
import { FaUserAlt } from "react-icons/fa";
import AppointFilter from "./PatientsOptions";

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
    collection(db, "Clients"),
    where("DailyAppCount", ">", "1"),
    where(
      `lastAppointment`,
      "==",
      `${day}, ${month} ${cdate}, ${currentYears}`
    ),
    limit(10)
  );

  const [flag, setFlag] = useState(false);

  const [docs, loading, error] = useCollectionData(q);

  const [RequestCount, setRequestCount] = useState(0);

  return (
    <>
      <div class="RecenetFlagged-container">
        <h4 class="request-login-heading">
          Daily Alerts : <span className="alert-number">14</span>
        </h4>
        {/* <ul className="">
          {docs?.map((doc) => (
            <li>
              <p className="data-styling ">{doc.Name} </p>
              <p className="data-styling ">{doc.clientID}</p>
              <p className="data-styling">{doc.lastAppointment}</p>
              <p className="data-styling">{doc.lastAppointmentlocation}</p>
              <AppointFilter
                appID={doc.Appointment_ID}
                appointmentPath={`/patients/appointment/${doc.clientID}`}
                clientPath={`/patients/Personal/${doc.clientID}`}
              />
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
}
