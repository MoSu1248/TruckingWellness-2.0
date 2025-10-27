import React, { useState, useEffect , useReducer , prevState } from "react";
import { db } from "../../firebaseConfig/firebase";
import { FaUserInjured } from "react-icons/fa";
import { useCollectionData } from "react-firebase-hooks/firestore";

import {
    collection,collectionGroup,
     getCountFromServer,
     query,where,
} from "firebase/firestore";
import { IoLogInSharp } from "react-icons/io5";

export default function DailyCounter({ path }) {
    const q = collection(db, path);
    const [docs, loading, error] = useCollectionData(q);
  
    let currentYear = new Date().getFullYear()
    const [counter, setcounter] = useState();
  
    useEffect(() => {
        async function getrequests() {       
            const snapshot = await getCountFromServer(q);
            setcounter(snapshot.data().count)
        };
        getrequests();
        
      },);
  
    return (
      <>
     <div className="nurse-counter-container">
            <div className="nurse-counter-content-container">
                <IoLogInSharp className="counter-icon"/>
                  <div className="counter-details-container">
                    <h5 className="counter-header">Daily Login Counter</h5>
                  <p className="counter-no">{counter}</p>
                </div>
            </div>
      </div>
      </>
    );
}

