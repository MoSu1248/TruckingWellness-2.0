import React, { useState, useEffect , useReducer , prevState } from "react";
import { db } from "../../firebaseConfig/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

import {
    collection,collectionGroup,
     getCountFromServer,
     query,where,
} from "firebase/firestore";
import { FaUserInjured } from "react-icons/fa";

export default function DailyClientCounter({ day , month, test }) {
    let currentYear = new Date().getFullYear();
    const [counter, setcounter] = useState();
    
    useEffect(() => {
        async function getrequests() {
          const coll = query(
            collectionGroup(db, " " +currentYear),
            where("Day", "==", day),
            where("Month", "==", month),
            where("Nurse_Id", "==", test)
        );
          const snapshot = await getCountFromServer(coll);
          setcounter(snapshot.data().count);
        }
        getrequests();
      });
  
    return (
      <>
     <div className="nurse-counter-container">
            <div className="nurse-counter-content-container">
                <FaUserInjured  className="counter-icon"/>
                  <div className="counter-details-container">
                    <h5 className="counter-header">Daily Clients Assessed</h5>
                  <p className="counter-no">{counter}</p>
                </div>
            </div>
      </div>
      </>
    );
}

