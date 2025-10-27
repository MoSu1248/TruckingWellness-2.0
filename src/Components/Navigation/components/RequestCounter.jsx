import React, { useState, useEffect , useReducer , prevState } from "react";
import {
    collection,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

 const RequestCounter = () => {
    const [RequestCount, setRequestCount] = useState(0);

    useEffect(() => {
        async function getrequests() {       
          const coll =  collection(db, "Requests");
          const snapshot = await getCountFromServer(coll);
          setRequestCount(snapshot.data().count)
        };
        getrequests();
        
      },);

  return (
 <>
      <p className={`${RequestCount !== 0 ? "request-counter" : "request-counter request-counter-visibility"}`}                    
      >{RequestCount}</p>
      </>
  )
}




export default RequestCounter