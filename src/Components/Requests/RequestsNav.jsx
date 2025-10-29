import React, { useState, useEffect, useReducer } from "react";
import { NavLink } from "react-router-dom";
import { FaInbox } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
// import RequestCounter from "../Navigation/components/RequestCounter";
import "./requestsNav.css";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

const RequestsNav = (props, active1, active2, active3) => {
  const [requests, setrequests] = useState([]);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  const [RequestCount, setRequestCount] = useState(0);
  function refresh(ignored) {
    forceUpdate(ignored);
  }
  useEffect(() => {
    async function getrequests() {
      const coll = collection(db, "Requests");
      const snapshot = await getCountFromServer(coll);
      setRequestCount(snapshot.data().count);
    }
    getrequests();
  });
  return (
    <div className="requestsNav-container">
      <div className=" nav-header-container">
        <h5 className="general-info-header">
          Inbox
        </h5>
      </div>
      <ul className="requestsNav-line-styling">
        <li>
          <NavLink
            to={`/requests/inbox`}
            className={({ isActive }) => {
              return isActive ? "requestLink req-active-link" : "requestLink ";
            }}
          >
            <div className="request-title-container">
              <FaInbox className="requests-nav-icon" />
              <p>Inbox</p>
            </div>
          </NavLink>
        </li>
        <li></li>
        <li className="request-nav-styling">
          <NavLink
            className={({ isActive }) => {
              return isActive ? "requestLink req-active-link" : "requestLink ";
            }}
            to={`/requests/Deleted`}
          >
            <div className="request-title-container">
              <RiDeleteBin2Fill className="requests-nav-icon" />
              <p>Deleted</p>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default RequestsNav;
