import { useCollectionData } from "react-firebase-hooks/firestore";
import { setDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { collection, getDocs, limit } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import React, { useState, useEffect } from "react";
import { IoFilter } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import "./filter.css"
import { motion } from "framer-motion";

export default function AppointFilter({ path , sendDataToParent }) {
  const today = new Date();
  let currentYear = new Date().getFullYear()
  const [openProfile, setOpenProfile] = useState(false);
    
    // sendDataToParent = year;
   
  return (
      <div>
        <div className="filter-container">
        <IoFilter className={'refresh-btn filter-btns'} onClick={()=> setOpenProfile((prev)=>(!prev))} />

      </div>  
      {openProfile &&(<div className="flex flex-col dropDownProfile"onMouseLeave={()=> setOpenProfile((prev)=>(!prev))}>
            <div className="flex flex-col gap-4">
                  {/* <input type="text" value={data} onChange={(e) => setData(e.target.value)} /> */}
                  <h6 className="filter-header">Filter Year</h6>
                <button className="filter-btn-styling" value={currentYear} onClick={(e) => sendDataToParent(e.target.value)}>  {currentYear}</button>
                <button className="filter-btn-styling" value={currentYear-1} onClick={(e) => sendDataToParent(e.target.value)}>{currentYear+1}</button>
                <button className="filter-btn-styling" value={currentYear-1} onClick={(e) => sendDataToParent(e.target.value)}>{currentYear+2}</button>
                {/* <button className="filter-btn-styling" value={currentYear+1} onClick={(e) => sendDataToParent(e.target.value)}>{currentYear+1}</button>
                <button className="filter-btn-styling" value={currentYear+2} onClick={(e) => sendDataToParent(e.target.value)}>{currentYear+2}</button>
                <button className="filter-btn-styling" value={currentYear+3} onClick={(e) => sendDataToParent(e.target.value)}>{currentYear+3}</button>
               */}
              </div>
          </div>
        )}
         
    </div>
  );
}
