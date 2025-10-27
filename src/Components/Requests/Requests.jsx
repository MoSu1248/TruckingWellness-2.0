import React, { useState, useEffect , useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Requests.css";
import RequestNav from "./RequestsNav";
import RequestSelection from "./RequestSelection";
import { useLocation } from 'react-router-dom'

const MySwal = withReactContent(Swal);
const Show = (props , active1) => {
  const [reducerValue, forceUpdate] = useReducer(x => x+1 ,0)
  const [search, setSearch] = useState("");  
  const [requests, setrequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const [art, setart] = useState("");
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPostIndex = requests.slice(firstPostIndex, lastPostIndex);
  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false);
  const requestsCollection = collection(db, "Requests");
  
  useEffect(() => {
    async function getrequests() {
      const data = await getDocs(requestsCollection);
      setrequests(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  

    };
    getrequests();
    
  }, [reducerValue]);

  function refresh(ignored) {
    forceUpdate(ignored);
  } 

  const deleterequest = async (id) => {
    const requestDoc = doc(db, "Requests", id);
    await deleteDoc(requestDoc);
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

  return (
    <>

      <div className="wrapper ">

            <div className="request-container">
          <RequestNav active1={"Yes"}/>
          <RequestSelection path={`Requests`} />
        </div>
      </div>
    </>
  );
};
export default Show;
