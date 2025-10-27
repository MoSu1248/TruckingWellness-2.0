import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { IoMail } from "react-icons/io5";

import { collection, query } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase";
import "./recentMessages.css";
import { BiMessageDetail } from "react-icons/bi";
import { IoChevronForward } from "react-icons/io5";

export default function NurseRequests() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const q = query(collection(db, "Requests_Deleted"));
  const [docs, loading, error] = useCollectionData(q);

  return (
    <div
      className=" nurse-dash-messages-container "
      style={{ margin: " 0 0 0 1rem" }}
    >
      <div className="heading-icon-container-requests">
        <h4 className="request-login-heading">Inbox</h4>
        <Link className="viewbtn" to={`/requests/inbox`}>
          <IoChevronForward className="chev-styling" />
        </Link>
      </div>
      <div className="nurse-message-container">
        {loading && "Loading..."}
        {docs?.map((doc) => (
          <div className="ttest">
            <div>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
