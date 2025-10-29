import { useCollectionData } from "react-firebase-hooks/firestore";
import AddNew from "./AddNew";
import {
  setDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { collection, getDocs, limit } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import "./nurseRecent.css";
import Folder from "../Resources/folder.png";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Options from "../Home/Recent Patients/PatientsOptions";
import AppointFilter from "../Home/Recent Patients/PatientsOptions";
import { FaRegFolderOpen } from "react-icons/fa";
import "../Home/Recent Patients/recentPatients.css";

export default function ChildrenList({ path, id }) {
  const q = query(
    collection(db, "Clients"),
    where("LastSeenBy", "==", `${path}`),
    limit(5)
  );
  const [docs, loading, error] = useCollectionData(q);

  return (
    <div className="recent-patients-container">
      <div className="heading-icon-container-recent">
        <h4 className="request-login-heading">Recent Patients</h4>
      </div>

      <div className="recent-patients-scroll">
        {docs?.map((doc) => (
          <details key={doc.clientID} className="recent-patient-details">
            <summary className="recent-patient-summary">
              <div className="summary-info">
                <p className="summary-text">{doc.Name}</p>
                <p className="summary-text">{doc.clientID}</p>
              </div>
            </summary>

            <div className="nurse-recent-patients-info">
              <div className="info">
                <p className="info-text">{doc.lastAppointment}</p>
                <p className="info-text">{doc.lastAppointmentlocation}</p>
              </div>

              <AppointFilter
                sendDataToParent={doc.clientID}
                appointmentPath={`/patients/appointment/${doc.clientID}`}
                clientPath={`/patients/Personal/${doc.clientID}`}
              />
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
