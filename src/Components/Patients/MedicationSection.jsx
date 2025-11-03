import React, { useState, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, getDocs, limit } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import "./appointmentTimeline.css";
import { AiOutlineMedicineBox } from "react-icons/ai";
import "./medicationSection.css";
import { Link } from "react-router-dom";
import AppointFilter from "./AppointFilter";
import { IoChevronForward } from "react-icons/io5";

export default function AppointmentTimeline({ path, passedId }) {
  let currentYear = new Date().getFullYear();

  const [dataFromChild, setDataFromChild] = useState(currentYear);
  const [data, setData] = useState();

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }

  function checkData(params) {
    setData(params);
  }

  const query = collection(db, `Clients/${passedId}/ ${dataFromChild}`);
  const [docs, loading, error] = useCollectionData(query);

  return (
    <div className="med-top-wrapper">
      <div className="medication-header-container">
        <h5 className="general-info-header appointment-timeline-header">
          Medication {dataFromChild}
        </h5>
        <div className="action-btn-container">
          <AppointFilter sendDataToParent={handleDataFromChild} />
          <Link to={`/patients/medication/${passedId}`}>
            <button className="patients-appointment-view-btn viewbtn">
              <IoChevronForward className="chev-styling" />
            </button>
          </Link>
        </div>
      </div>
      <table className="medication-table-container">
        {/* <img src={Listimg} alt="" className="list-patient-img-styling" /> */}

        <div className="medication-top-container">
          <thead className="medication-table-header-container">
            <tr className="clients-table-row-header ">
              <th>Medication</th>
              <th>Assigned by</th>
            </tr>
          </thead>
          <tbody className="medication-data-container">
            {docs?.map((doc) => (
              <tr className="medication-table-row">
                <td className="med-data">
                  <p className="admin">{doc.Medication_Administered}</p>
                </td>
                <td className="med-data-id">
                  <p>{doc.Nurse_Id}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  );
}
