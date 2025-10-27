import React, { useState, useEffect , useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Requests.css";
import Request2 from "./RequestDetails";
import UserCard from "../User/UserCard";
import { IoMdRefresh } from "react-icons/io";
import "./requestheader.css"
import { HiDotsVertical } from "react-icons/hi";

const MySwal = withReactContent(Swal);
const Show = ({props , path}) => {
  const [reducerValue, forceUpdate] = useReducer(x => x+1 ,0)
  const [search, setSearch] = useState("");  
  const [requests, setrequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const [RequestCount, setRequestCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [ref, setRef] = useState();
  const [art, setart] = useState("");
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false);
  const requestsCollection = collection(db, path);
  const query = collection(db, path);
  const [docs, loading, error] = useCollectionData(requestsCollection);

  function refresh(ignored) {
    forceUpdate(ignored);

  }

  useEffect(() => {
   
  },[reducerValue]) ;

  
  const deleterequest = async (id) => {
    const requestDoc = doc(db, "Requests", id);
    await deleteDoc(requestDoc);
    refresh();

  };

  const confirmDelete = (id) => {
    MySwal.fire({
      title: "Clear Request?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Clear",
    }).then((result) => {
      if (result.isConfirmed) {
        deleterequest(id);
        Swal.fire("Request", "Request Cleared", "success");
      }
    });
  };

  console.log(art);
  


  return (
    <>
          <div className="messages-content-container">
            <div className="message-container">
                      <div className=" nav-header-container">
                      <form className="search-request">
              <input
                className="search-input-request"
                placeholder="What are you looking for?"
                onChange={(e) => setSearch(e.target.value)}
                      ></input>  
            <IoMdRefresh  className="refresh-btn" onClick={refresh}/>
            </form>
          </div>
              <div className="request-secletion-scroll">
                {docs?.filter((request) => {
                    return search === ""
                      ? request
                      : request.id.includes(search);
                  })
                  .map((request) => (
                
                  <div key={request.id} className="request-button" onClick={() => setart(`${request.id}`)}>
                      <ul className={`${openProfile === request.id ? 'list list-open' : 'list '}`}
                        onClick={() => {
                          setOpenProfile(request.id);
                          setOpen(true);
                        }}>
                        <div >
                              <li>
                              <UserCard firstName={request.Name} lastName={request.Sname} />
                              </li>
                            </div>
                            <div className="messages-info-container">
                            <div className="top-sidebar-container">
                            <li className="user__name">{request.Name} {request.Sname}
                            </li>
                            <li className="date-row list-item date-request">
                                {request.Date}
                            </li>
                            </div>
                              <li className=" list-item request-item">{request.Request}</li>
                        </div>
                        <HiDotsVertical  className="tester-icon"/>
                      </ul>
                    </div>
                  ))}
              </div>
        </div>
          <Request2 propos={path} get={art}  open={open}/>
          </div>
        
    </>
  );
};
export default Show;
