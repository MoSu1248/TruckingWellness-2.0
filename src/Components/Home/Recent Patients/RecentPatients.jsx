import { useCollectionData } from "react-firebase-hooks/firestore";
import { orderBy } from "firebase/firestore";
import { limit } from "firebase/firestore";
import { collectionGroup, query } from "firebase/firestore";
import React from "react";
import { db } from "../../firebaseConfig/firebase";
import "./recentPatients.css";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

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

  console.log(currentYears);

  let q = query(
    collectionGroup(db, " " + 2024),
    // where(
    //   "Appointment_Date",
    //   "==",
    //   `${day}, ${month} ${cdate}, ${currentYears}`
    // ),
    orderBy("Appointment_Date", `desc`),
    limit(10)
  );

  const [docs, loading, error] = useCollectionData(q);

  return (
    <div className="dash-recent-patients">
      <h4 className="request-login-heading">Recent Clients</h4>
      <div className="recent-patients-scroll">
        {docs?.map((doc) => (
          <details className="">
            <summary>{doc.clientID}</summary>
            <div className="nurse-recent-patients-info">
              <div className="info">
                <p className="info-text">{doc.Appointment_Date}</p>
                <p className="info-text">{doc.Appointment_Location}</p>
              </div>
              <Link
                className="viewbtn"
                to={`/patients/Personal/${doc.clientID}`}
              >
                <IoChevronForward className="chev-styling" />
              </Link>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
