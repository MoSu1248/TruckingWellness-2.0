import { useCollectionData } from "react-firebase-hooks/firestore";
import { setDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { collection, getDocs, limit } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { IoFilter } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./patientsOptions.css"

export default function AppointFilter({ clientPath,appointmentPath }) {
  const today = new Date();
  let currentYear = new Date().getFullYear()
  const [openProfile, setOpenProfile] = useState(false);
    
  return (
      <div className="options-container">
        <div className="filter-container">
          <button class="chakra-menu__menu-button css-1bn52vq filter-icon-styling" onClick={()=> setOpenProfile((prev)=>(!prev))}  >
            <span class="css-xl71ch">
            <BsThreeDots />
            </span>
          </button>  
      </div>  
      {openProfile &&(<div className="flex flex-col options" onMouseLeave={()=> setOpenProfile((prev)=>(!prev))}>
            <div className="flex flex-col gap-4">
                  {/* <input type="text" value={data} onChange={(e) => setData(e.target.value)} /> */}
                  <h6 className="filter-header">Options</h6>
                  <Link  to={appointmentPath} >
           
            <button className="filter-btn-styling"> Appointment</button>

                            </Link>
                            <Link className="" to={clientPath}>
                  <button className="filter-btn-styling">Client Profile</button>
                            </Link>
               
              </div>
          </div>
        )}
         
    </div>
  );
}
