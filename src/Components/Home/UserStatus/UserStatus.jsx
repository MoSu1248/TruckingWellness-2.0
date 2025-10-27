import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { FiEdit } from "react-icons/fi";
import {
    collection,
    query,
    getDocs,
    orderBy,
    limit,
    where,
} from "firebase/firestore";
import { db ,  } from "../../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { IoMdRefresh } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { FaArrowUp } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import "./userStatus.css"

const MySwal = withReactContent(Swal);

const Nurse = () => {

  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }


  const [search, setSearch] = useState("");
  const [patients, setpatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  

const [reducerValue, forceUpdate] = useReducer(x => x+1 ,0)

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPostIndex = patients.slice(firstPostIndex, lastPostIndex);
  const totalIndex = patients.length;
    const q = query(collection(db, "Nurses"), where("Status", "==", `Online`));
    const [docs, loading, error] = useCollectionData(q);


  const increaseCount = () => { 
    setPostPerPage(postPerPage + 5); 
  }; 

  function refresh(ignored) {
    forceUpdate(ignored);
  }
  
  return (
    <>
            <div className="status-Container">
              <div className="heading-icon-container-recent stickyu">
                {/* <FiUsers className="edit-icon" /> */}
                <HiUsers className="icon-styling" />
                <h4 className="request-login-heading">Active Users List</h4>
                <Link
                              className="viewbtn"
                              to={`/Nurses`}
                            >
                              <IoChevronForward className="chev-styling" />
                            </Link>
              </div>
              <div className="status-table-style-container ">
              <table className="status-table">
                <thead>
                  <tr className="table-row-header">                
                    <th className="status-table-header status-header"><p>Nurse ID</p></th>
                    <th className="status-table-header status-header"><p>Status</p></th>
                    <th className="status-table-header status-header"><p>Action</p></th>
                  </tr>
                </thead>
                <tbody className="status-body">
                  {docs?.map((request) => (
                    <tr key={request.id} className="table-row">
                        <td className="data-border user-status-center"><p className="data dashboard-data-id">{request.NurseID}</p></td>
                        <td className="data-border user-status-center"><p className={`${request.Status ==="Online" ? 'data-status-item-dash class1' : 'data-status-item-dash class2'}`}>{request.Status}</p></td>               
                    
                      
                      <td className="action-borders">
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
                  <div ></div>
                </tfoot>
                </table>
                </div>
              
            </div>
          </>

  );
};

export default Nurse;
