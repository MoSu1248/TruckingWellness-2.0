import React, { useState, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
// import AddNew from "./AddNew";
import { setDoc, updateDoc, doc, deleteDoc, orderBy, onSnapshot, query, getDoc } from "firebase/firestore";
import { collection, getDocs, limit } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import "./appointmentTimeline.css"
import Listimg from "./list_icon.svg"
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function LatestReferrals({ path, passedId }) {
    
    // const getpatientById = async (id) => {        
      const [appointments, setAppointments] = useState([{ name: "Loading...", id: "initial" }]);
      const [test, settest] = useState();
    const [name, setName] = useState("");
    
      useEffect(() => {
  
        const getpatient= async () => {
          const collectionRef =  await collection(db, path);
          const q = await query(collectionRef,limit(1),orderBy("Appointment_Date" , "desc"));
      
          const unsub = onSnapshot(q, (snapshot) =>
            setAppointments(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            );
            
          return unsub;
          
          };
          
          getpatient();
          {
            appointments?.map((doc) => (
                settest(doc.Appointment_Date)
        ))}
  
      }, []);
    
    
      const getpatientById = async () => {
        const request = await getDoc(doc(db, `${path}/${test}/Client Info/Details`));
        if (request.exists()) {
          //console.log(patient.data())
          setName(request.data().Name);
        } else {
          console.log("Requset Doesnt Exist");
        }
      };
    
      useEffect(() => {
        getpatientById();
        // setcollectionRef()
      }, []);
    
    
      

  return (
    <div className="appointmentTimeline-top-wrapper">
      <div className="appointmentTimeline-header-container">
        
      <IoCalendarOutline className="calender-icon icon-styling"/>

        <h5 className="general-info-header appointment-timeline-header">Appointment Timeline</h5>
        <Link to={`/appointment/${passedId}`}>
        <button className="patients-appointment-view-btn patients-edit-btn">View</button>
              </Link>
      </div>
      <div className="appointmentTimeline-top-container">
            <div className="appointment-list-items">
                <li>{name}</li>
               <div className="appointmentTimeline-data-container">
                 {/* <p className="appointmentTimeline-data date" >{doc.Appointment_Date}</p> */}
               </div>
          </div>
          </div>
      
    </div>
  );
}
