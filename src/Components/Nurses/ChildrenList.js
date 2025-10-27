import { useCollectionData } from "react-firebase-hooks/firestore";
import AddNew from "./AddNew";
import {
  collection,collectionGroup,
   getCountFromServer,
   query,where,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import React, { useState, useEffect , useReducer , prevState } from "react";
import Listimg from "../images/list_icon.svg"
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { TbArrowsRightLeft } from "react-icons/tb";

import ReactLoading from "react-loading";

export default function ChildrenList({ path }) {
  const q = collection(db, path);
  const [docs, loading, error] = useCollectionData(q);

  let currentYear = new Date().getFullYear()
  const [counter, setcounter] = useState();


  return (
    <>
    <div className="login-info-list">
        <div className="login-list-header-container">
          <div className="t2"><h4>Login times</h4></div>
          <div className="t2 logout-header"><h4>Logout times</h4></div>
        </div>
        <div className="login-times-container">
        {loading && (<ReactLoading type={"bars"} color="#fff" />)}
        {docs?.map((doc , index) => (
            <div className="t" key={index}>

              <div className="t1">
              <p className="login-counter">{index+1 }</p>
              <li className="login-info-list-data" ><p>{doc.Login}</p></li>
            </div>
            <div className="exchange-arrrows">
            <TbArrowsRightLeft />

            </div>
              <div className="t1 logout-border">
              <li className="login-info-list-data logout-data" ><p>{doc.Logout}</p></li>
            </div>
            </div>
        ))}
      
      </div>
    </div>
    </>
  );
}
