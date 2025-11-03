import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { IoMdRefresh } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { IoChevronForward } from "react-icons/io5";
import { FaSort } from "react-icons/fa";

const MySwal = withReactContent(Swal);

const Nurse = () => {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  const [search, setSearch] = useState("");
  //1 - configuramos los hooks
  const [patients, setpatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPostIndex = patients.slice(firstPostIndex, lastPostIndex);
  const totalIndex = patients.length;

  const patientsCollection = collection(db, "Nurses");

  useEffect(() => {
    async function getpatients() {
      const data = await getDocs(patientsCollection);
      const body = await data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setpatients(body);
    }
    getpatients();
  }, [reducerValue]);

  const increaseCount = () => {
    setPostPerPage(postPerPage + 5);
  };

  function refresh(ignored) {
    forceUpdate(ignored);
  }

  return (
    <>
      <div className="wrapper nurse-container-wrapper">
        <div className="client-container">
          <div className="Nurses-table-header ">
            {/* <FiUsers className="edit-icon" /> */}
            <div className="heading-icon-main-pages">
              <h4 className="client-list-header">Nurses</h4>
            </div>
            <form className="search">
              <input
                className="search-input"
                placeholder="Search User ID"
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
                  <th className="">
                    <span>
                      User ID <FaSort className="arrow-rotation-styling" />
                    </span>
                  </th>
                  <th className="">
                    <span>
                      Nurse ID
                      <FaSort className="arrow-rotation-styling" />
                    </span>
                  </th>
                  <th className="">
                    <span>
                      Username
                      <FaSort className="arrow-rotation-styling" />
                    </span>
                  </th>
                  <th className="">
                    <span>
                      Last Seen
                      <FaSort className="arrow-rotation-styling" />
                    </span>
                  </th>
                  <th className=" ">Status</th>
                  <th className=" ">Action</th>
                </tr>
              </thead>
              <tbody className="patients-table-body-styling">
                {patients
                  .filter((request) => {
                    return search === ""
                      ? request
                      : request.id.includes(search);
                  })
                  .slice(0, postPerPage)
                  .map((request) => (
                    <tr key={request.id} className="row-styles">
                      <td className="patients-table-data">{request.id}</td>
                      <td className="patients-table-data ">
                        {request.NurseID}
                      </td>
                      <td className="patients-table-data">{request.Name}</td>
                      <td className="patients-table-data">
                        {request.lastLogin}
                      </td>
                      <td className="patients-table-data">
                        <p
                          className={`${
                            request.Status === "Online"
                              ? "data-status-item class1"
                              : "data-status-item class2"
                          }`}
                        >
                          {request.Status}
                        </p>
                      </td>
                      <td className="patients-table-data">
                        <Link
                          className="viewbtn"
                          to={`/Nurses/Nurse/${request.id}`}
                        >
                          <IoChevronForward className="chev-styling" />
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
              <tfoot className="footer">
                <div></div>
              </tfoot>
            </table>
          </div>

          <button
            className={`
                                  ${
                                    totalIndex === currentPostIndex.length
                                      ? "css-1f1mtmi-nurses-hidden"
                                      : ""
                                  }`}
            onClick={increaseCount}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Nurse;
