import React, { useState, useEffect , useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,

} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Requests.css";
import Banner from "../Banner/Banner";
import RequestNav from "./RequestsNav";
import RequestSelection from "./RequestSelection";

const MySwal = withReactContent(Swal);
const Show = (props) => {
  const [reducerValue, forceUpdate] = useReducer(x => x+1 ,0)
  const [search, setSearch] = useState("");  
  const [requests, setrequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const [RequestCount, setRequestCount] = useState(0);
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

  return (
    <>
      <div className="wrapper requests-wrapper">
        <Banner title="Inbox" />
        <div className="request-container">
          <RequestNav active2={"Yes"}/>
         <RequestSelection/>
         
        </div>
        
      </div>
    </>
  );
};
export default Show;
