import { useCollectionData } from "react-firebase-hooks/firestore";
import { setDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { collection, getDocs, limit } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase";
import React, { useState, useEffect } from "react";
import { IoFilter } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { motion, Variants } from "framer-motion";

import "./dashFilter.css"

export default function DashFilter({ path , sendDataToParent }) {
    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
  const [openProfile, setOpenProfile] = useState(false);
   
  return (
      <div>
        <div className="filter-container">
          <motion.button whileTap={{ scale: 1.3 }} class="chakra-menu__menu-button css-1bn52vq filter-icon-styling" onClick={()=> setOpenProfile((prev)=>(!prev))} >
            <span class="css-xl71ch">
            <BsThreeDots />

            </span>
          </motion.button>  
      </div>  
      {openProfile &&(<div className="flex flex-col dash-dropDownProfile" onMouseLeave={()=> setOpenProfile((prev)=>(!prev))}>
                  <h6 className="filter-header">Month</h6>
            <div className="dash-content-container">
              <div className="flex flex-col gap-4 ">
                  <button className=" dash-filter-btn-styling" value={"January"} onClick={(e) => sendDataToParent(e.target.value)}>Jan</button>
                  <button className="dash-filter-btn-styling" value={"February"} onClick={(e) => sendDataToParent(e.target.value)}>Feb</button>
                  <button className="dash-filter-btn-styling" value={"March"} onClick={(e) => sendDataToParent(e.target.value)}>Mar</button>
                  <button className="dash-filter-btn-styling" value={"April"} onClick={(e) => sendDataToParent(e.target.value)}>Apr</button>
                  <button className="dash-filter-btn-styling" value={"May"} onClick={(e) => sendDataToParent(e.target.value)}>May</button>
                  <button className="dash-filter-btn-styling" value={"June"} onClick={(e) => sendDataToParent(e.target.value)}>Jun</button>
                  <button className="dash-filter-btn-styling" value={"July"} onClick={(e) => sendDataToParent(e.target.value)}>Jul</button>
                  <button className="dash-filter-btn-styling" value={"August"} onClick={(e) => sendDataToParent(e.target.value)}>Aug</button>
                  <button className="dash-filter-btn-styling" value={"September"} onClick={(e) => sendDataToParent(e.target.value)}>Sep</button>
                  <button className="dash-filter-btn-styling" value={"October"} onClick={(e) => sendDataToParent(e.target.value)}>Oct</button>
                  <button className="dash-filter-btn-styling" value={"November"} onClick={(e) => sendDataToParent(e.target.value)}>Nov</button>
                  <button className="dash-filter-btn-styling" value={"December"} onClick={(e) => sendDataToParent(e.target.value)}>Dec</button>
                </div>
            </div>
          </div>
        )}
         
    </div>
  );
}
