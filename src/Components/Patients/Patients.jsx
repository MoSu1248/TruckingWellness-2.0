import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  where,
  limit,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { IoChevronForward } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import { FaUserInjured } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import "./patients.css";
import { motion } from "framer-motion";

const MySwal = withReactContent(Swal);
const Show = () => {
  const [requests, setrequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(100);
  const [flagged, setflagged] = useState(false);
  const [flaggedStatus, setflaggedStatus] = useState(false);
  const [hiv, setHiv] = useState(false);
  const [hivStatus, setHivStatus] = useState(false);
  const [filterState, setFilterState] = useState("");
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPostIndex = requests.slice(firstPostIndex, lastPostIndex);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [active, setactive] = useState([false]);
  const [filter, setFilter] = useState([]);

  const [openProfile, setOpenProfile] = useState(false);

  let q = query(collection(db, "Clients"), limit(10));
  const getrequests = async () => {
    const data = await getDocs(q);
    setrequests(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChange = () => {
    setHiv(!hiv);
  };

  const handleChange2 = () => {
    setflagged(!flagged);
  };

  const searchuser = async () => {
    setactive(true);
    if (active === true) {
      q = query(q, where("clientID", "==", `${search}`));

      console.log(active);
      getrequests();
    }
  };

  const hideSearch = async () => {
    setactive(false);
    getrequests();
    setSearch("");
  };

  async function runProcess() {
    if (flagged === true) {
      q = query(q, where("Flagged", "==", "Yes"));
      setflaggedStatus(true);
    }

    if (flagged === false) {
      q = query(q);
      setflaggedStatus(false);
    }

    if (hiv === false) {
      q = query(q);
      setHivStatus(false);
    }

    if (hiv === true) {
      q = query(q, where("HIV", "==", "Yes"));
      setFilterState("Hiv");
      setHivStatus(true);
    }

    if (hiv === true && flagged === true) {
      q = query(q, where("HIV", "==", "Yes"), where("Flagged", "==", "Yes"));
      setFilterState("Flagged , Hiv");
      setHivStatus(true);
      setflaggedStatus(true);
    }
    await getrequests();
  }

  useEffect(() => {
    const result = data.filter((item) => {
      return item.title.toLowerCase().match(search.toLocaleLowerCase());
    });
    setFilter(result);
  }, [search]);

  useEffect(() => {
    getrequests();
  }, []);

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
                <h4 className="client-list-header">Recent Clients</h4>
              </div>
              <div className="search-top-container">
                <form className="search-patients search-test">
                  <input
                    className="search-input"
                    placeholder="Search Client ID"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    onKeydown={(event) => {
                      if (event.key === "enter") {
                        searchuser();
                      }
                    }}
                  ></input>
                </form>
                <button className={"search-btn-styling"} onClick={searchuser}>
                  <IoSearchOutline className="search-icon" />
                  <span>Search</span>
                </button>
                <IoMdRefresh
                  className="refresh-btn-styling"
                  onClick={hideSearch}
                />
              </div>
            </div>
            <div className="table-style-container">
              <div className="client-filter-container">
                {/* <IoMdCheckmark className={`${hiv === false ? 'refresh-btn' : 'refresh-btn-active'}`} onClick={() => setHiv((prevOpen) => !prevOpen)}/>
                <Flag className={`${flagged === false ? 'refresh-btn' : 'refresh-btn-active'}`} onClick={() => setflagged((prevOpen) => !prevOpen)} /> */}
                <div className="filter-containers">
                  <div className="filter-state-container">
                    {(hivStatus || flaggedStatus) && (
                      <span className={"Filter-label"}>Filter: </span>
                    )}
                    {hivStatus && <span>HIV</span>}
                    {flaggedStatus && <span>Flagged</span>}
                  </div>
                  <div>
                    <IoFilter
                      className={"refresh-btn"}
                      onClick={() => setOpenProfile((prev) => !prev)}
                    />
                    {openProfile && (
                      <div
                        className="flex flex-col dropDownProfile_main"
                        onMouseLeave={() => setOpenProfile((prev) => !prev)}
                      >
                        <div className="flex flex-col gap-4 filter-options-inner-container">
                          <h6 className="filter-header">Filter Options</h6>
                          <div>
                            <label className="checkbox-container">
                              <input
                                type="checkbox"
                                className="check-styling"
                                checked={hiv}
                                onChange={handleChange}
                              />
                              <span className="check-label">Hiv Positive</span>
                            </label>
                          </div>
                          <div>
                            <label className="checkbox-container">
                              <input
                                type="checkbox"
                                checked={flagged}
                                className="check-styling"
                                onChange={handleChange2}
                              />
                              <span className="check-label">Flagged</span>
                            </label>
                          </div>
                          <button
                            className="filter-btn-set"
                            onClick={runProcess}
                          >
                            Filter
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
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
                    <th>
                      Location
                      <FaSort className="arrow-rotation-styling" />
                    </th>
                    <th className="hiv-header">HIV</th>
                    <th className="flag-header">Flagged</th>
                    <th className="action-header"></th>
                  </tr>
                </thead>
                <tbody className="patients-table-body-styling">
                  {currentPostIndex
                    .filter((request) => {
                      return search === ""
                        ? request
                        : request.id.includes(search);
                    })
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
                          {request.lastAppointmentlocation}
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
