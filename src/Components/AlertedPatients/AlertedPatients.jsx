import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { collectionGroup, query, where } from "firebase/firestore";

import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { async } from "@firebase/util";
import Pagination from "../EditPatients/Pagination";
import SelectLimit from "../EditPatients/selectLimit";
import { BiUserCircle } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import Banner from "../Banner/Banner";
import { IoChevronForward } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { IoMdRefresh } from "react-icons/io";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { FaUserInjured } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { TiWarning } from "react-icons/ti";

import "./alertedPatients.css";

const MySwal = withReactContent(Swal);
const Show = () => {
  let currentYear = new Date().getFullYear();
  const [requests, setrequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(100);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPostIndex = requests.slice(firstPostIndex, lastPostIndex);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const cdate = new Date().getDate();
  const currentDate = new Date();
  const currentYears = currentDate.getFullYear();
  const requestsCollection = query(
    collection(db, "Clients"),
    where("DailyAppCount", ">", "1"),
    where(`lastAppointment`, "==", `${day}, ${month} ${cdate}, ${currentYears}`)
  );

  const getrequests = async () => {
    const data = await getDocs(requestsCollection);
    setrequests(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    const result = data.filter((item) => {
      return item.title.toLowerCase().match(search.toLocaleLowerCase());
    });
    setFilter(result);
  }, [search]);

  useEffect(() => {
    getrequests();
  });

  function refresh(ignored) {
    forceUpdate(ignored);
  }

  return (
    <>
      <div className="wrapper">
        <div className="client-container">
          <>
            <div className="clients-search-container">
              <div className="heading-icon-main-pages">
                <TiWarning className="injured-user-icon" />

                <h4 className="client-list-header">Recently Alerted Clients</h4>
              </div>

              <form className="search search-test">
                <input
                  className="search-input"
                  placeholder="Search Client ID"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                ></input>
                <IoMdRefresh className="refresh-btn" onClick={refresh} />
              </form>
            </div>
            <div className="table-style-container">
              <table className="table">
                <thead>
                  <tr className="clients-table-row-header">
                    <th>
                      Client ID
                      <FaSort className="arrow-rotation-styling" />
                    </th>
                    <th>
                      First Name
                      <FaSort className="arrow-rotation-styling" />
                    </th>
                    <th>
                      Surname
                      <FaSort className="arrow-rotation-styling" />
                    </th>
                    <th>
                      Cell Number
                      <FaSort className="arrow-rotation-styling" />
                    </th>
                    <th className="hiv-header">HIV</th>
                    <th className="flag-header">Flagged</th>
                    <th className="action-header">Daily Visit Count</th>
                    <th className="action-header">Action</th>
                  </tr>
                </thead>
                <tbody className="patients-table-body-styling">
                  {currentPostIndex
                    .filter((request) => {
                      return search === ""
                        ? request
                        : request.id.includes(search);
                    })
                    .slice(0, 10)
                    .map((request) => (
                      <tr key={request.id} className="row-styles">
                        <td className="patients-table-data">{request.id}</td>
                        <td className="patients-table-data">{request.Name}</td>
                        <td className="patients-table-data">
                          {request.Surname}
                        </td>
                        <td className="patients-table-data">
                          {request.cellNumber}
                        </td>
                        <td className="patients-table-data">
                          <div
                            className={`${
                              request.HIV === "Yes"
                                ? "hiv-data class2"
                                : "hiv-data class1"
                            }`}
                          >
                            {request.HIV}
                          </div>
                        </td>
                        <td className="patients-table-data">
                          <div
                            className={`${
                              request.Flagged === "Yes"
                                ? "hiv-data class2"
                                : "hiv-data class1"
                            }`}
                          >
                            {request.Flagged}
                          </div>
                        </td>
                        <td className="dailyAppCount">
                          {request.DailyAppCount}
                        </td>

                        <td className="patients-table-data">
                          <div className="hiv-data">
                            <Link
                              className="viewbtn"
                              to={`/patients/Personal/${request.id}`}
                            >
                              <IoChevronForward className="chev-styling" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </>
        </div>
      </div>
    </>
  );
};
export default Show;
