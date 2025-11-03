import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import "./appointmentTimeline.css";
import Listimg from "../images/list_icon.svg";
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import AppointFilter from "./AppointFilter";
import { IoChevronForward } from "react-icons/io5";

export default function AppointmentTimeline({ path, passedId }) {
  let currentYear = new Date().getFullYear();
  const { id } = useParams();
  const [appointments, setAppointments] = useState([
    { name: "Loading...", id: "initial" },
  ]);
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [dataFromChild, setDataFromChild] = useState(currentYear);

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }

  const q = query(
    collection(db, `Clients/${passedId}/ ${dataFromChild}`),
    orderBy("Appointment_Date", `desc`)
  );

  const [docs, loading, error] = useCollectionData(q);

  return (
    <div className="med-top-wrapper">
      <div className="appointmentTimeline-header-container">
        <h5 className="general-info-header appointment-timeline-header">
          Appointments {dataFromChild}
        </h5>
        <div className="action-btn-container">
          <AppointFilter sendDataToParent={handleDataFromChild} />
          <Link
            className="link-styling"
            to={`/patients/appointment/${passedId}`}
          >
            <button className="patients-appointment-view-btn viewbtn">
              <IoChevronForward className="chev-styling" />
            </button>
          </Link>
        </div>
      </div>
      <div className="appointmentTimeline-top-container">
        {docs?.map((doc) => (
          <NavLink
            to={`/patients/appointment/${id}`}
            state={{ from: "doc.Appointment_ID " }}
          >
            <div className="appointment-list-items">
              <img src={Listimg} alt="" className="list-patient-img-styling" />
              <div className="appointmentTimeline-data-container">
                {/* <button onClick={setYear(20)}></button> */}
                <p className="appointmentTimeline-data date">
                  {doc.Appointment_Date}
                </p>
                <p className="appointmentTimeline-data">
                  {doc.Appointment_Location}
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
