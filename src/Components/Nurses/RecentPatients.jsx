import { useCollectionData } from "react-firebase-hooks/firestore";
import AddNew from "./AddNew";
import { setDoc, updateDoc, doc, deleteDoc, query, where, orderBy } from "firebase/firestore";
import { collection, getDocs, limit } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import "./nurseRecent.css";
import Folder from "../Resources/folder.png"
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Options from "../Home/Recent Patients/PatientsOptions"
import AppointFilter from "../Home/Recent Patients/PatientsOptions";
import { FaRegFolderOpen } from "react-icons/fa";


export default function ChildrenList({ path,id }) {
  const q = query(collection(db, "Clients"),where("LastSeenBy", "==" , `${path}`),limit(5));
  const [docs, loading, error] = useCollectionData(q);

  return (
      <>        
    <div className="recent-patients-container">
        <div className="heading-icon-container-recent">
          <FaRegFolderOpen className="icon-styling"/>

            <h4 className="request-login-heading">Recent Patients</h4>
          </div>
              <div class="css-a0zh9g border-styling">
              <thead className="nurse-recent-patients-header">
                                  <h6 className="header_5 header_styling">Name & ID</h6>
                                  <h6 className="header_5 header_styling">Client ID</h6>
                                  <h6 className="header_5 header_styling">Appointment Date</h6>
                                  <h6 className="header_5 header_styling">Location</h6>                                     
                          </thead>
            <div class="css-1o49cnu">                     
                          <div class="css-0">
                              <table className="nurese-recent-patients-table">
                                  
                              {docs?.map((doc) => (
                                  
                                <tbody className="nurse-recent-patients-info" >
                                            <p className="data-styling ">{doc.Name} </p>
                                            <p className="data-styling ">{doc.clientID}</p>
                                        <p className=" data-styling">{doc.lastAppointment}</p>
                                    <p className="data-styling">{doc.lastAppointmentlocation}</p>
                                    <AppointFilter sendDataToParent={doc.clientID} appointmentPath={`/patients/appointment/${doc.clientID}` } clientPath={`/patients/Personal/${doc.clientID}`}/>

                                      </tbody>
                                    ))}
                          </table>                      
              {/* <p class="chakra-text css-10gtq1k">Last Seen</p>
                <p class="chakra-text css-z4yqbn">Stanford University</p> */}
              </div>     
            </div>                                             
          </div>
          <div className="">
            {/* <p className="">{request}</p> */}
          </div>
        </div>

    </>
  );
}
