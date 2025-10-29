import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate, Link } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { IoMail } from "react-icons/io5";

import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  limit,
  where,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import "./nurseRequests.css";
import { BiMessageDetail } from "react-icons/bi";

export default function NurseRequests({ nurse_id, test, get }) {
  const { id } = useParams();
  const [art, setart] = useState("");
  const [employee_ID, setID] = useState("");
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");
  const [status, setStatus] = useState("");
  const [lastLogin, setLastLogin] = useState("");
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [requests, setrequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const q = query(
    collection(db, "Requests_Deleted"),
    where("Employee_id", "==", `${get}`)
  );
  const [docs, loading, error] = useCollectionData(q);

  return (
    <div className="nurse-dash-messages-container">
      <div className="heading-icon-container-requests">
        <h4 className="request-login-heading">Messages</h4>
      </div>

      <div className="nurse-message-container">
        {loading && "Loading..."}
        {docs?.map((doc, i) => (
          <Link
            to="/requests/inbox"
            state={{ from: doc.id }}
            className="link-request-styling"
          >
            <div className="nurse-requests-container">
              <IoMail className="request-icon" />
              <div className="nurse-requests-info-container">
                <div className="dash-request-container">
                  <p className="user__name">
                    {doc.Name} {doc.Sname}
                  </p>
                  <p className="date-request">{doc.Date}</p>
                </div>
                <h6 className="request-heading-dash">{doc.Title}</h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
