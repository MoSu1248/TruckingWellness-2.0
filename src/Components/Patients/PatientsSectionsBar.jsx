import React, { useState, useEffect } from "react";
import {
  NavLink,
  useParams,
  useNavigate,
  Link,
  matchPath,
} from "react-router-dom";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import "./PatientsSectionsBar.scss";

export default function PatientsSectionsBar({
  props,
  active1,
  active2,
  active3,
  active4,
}) {
  const [counter, setCounter] = useState(1);

  return (
    <div className="patient-sections-container">
      <ul className="list-container patients-headings-container">
        <Link to="/patients" className="top-section-back-btn">
          <FaArrowLeft className="arrow-styling" />
        </Link>
        <li>
          {" "}
          <Link
            // className="patientLink"

            className={`
              ${active1 === "Yes" ? "patientLink active-link" : "patientLink"}
            
          `}
            to={`/patients/Personal/${props}`}
          >
            Personal Details
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className={`
              ${active2 === "Yes" ? "patientLink active-link" : "patientLink"}
            
          `}
            to={`/patients/Medication/${props}`}
          >
            Medication
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className={`
              ${active3 === "Yes" ? "patientLink active-link" : "patientLink"}
            
          `}
            to={`/patients/appointment/${props}`}
          >
            Appointment History
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className={`
              ${active4 === "Yes" ? "patientLink active-link" : "patientLink"}
            
          `}
            to={`/patients/Referrals/${props}`}
          >
            Referrals
          </Link>
        </li>
      </ul>
    </div>
  );
}
