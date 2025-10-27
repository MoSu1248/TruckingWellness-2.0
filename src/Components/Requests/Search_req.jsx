// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FiEdit } from "react-icons/fi";
// import {
//   collection,
//   getDocs,
//   getDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import { db } from "../firebaseConfig/firebase";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import { async } from "@firebase/util";
// import Pagination from "../EditPatients/Pagination";
// import SelectLimit from "../EditPatients/selectLimit";
// import { BiUserCircle } from "react-icons/bi";
// import { MdDeleteOutline } from "react-icons/md";
// import "./Requests.css";
// import Banner from "../Banner/Banner";
// import Create from "../EditPatients/Create";
// import Request from "./Request";

// const MySwal = withReactContent(Swal);
// const Show = () => {
//   const [search, setSearch] = useState("");
//   //1 - configuramos los hooks
//   const [requests, setrequests] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postPerPage, setPostPerPage] = useState(20);

//   const lastPostIndex = currentPage * postPerPage;
//   const firstPostIndex = lastPostIndex - postPerPage;
//   const currentPostIndex = requests.slice(firstPostIndex, lastPostIndex);

//   const requestsCollection = collection(db, "Requests");

//   const getrequests = async () => {
//     const data = await getDocs(requestsCollection);
//     //console.log(data.docs)
//     setrequests(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     //console.log(requests)
//   };
//   const deleterequest = async (id) => {
//     const requestDoc = doc(db, "Requests", id);
//     await deleteDoc(requestDoc);
//     getrequests();
//   };
//   const confirmDelete = (id) => {
//     MySwal.fire({
//       title: "Clear Request?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         deleterequest(id);
//         Swal.fire("Request", "Request Cleared", "success");
//       }
//     });
//   };

//   // const onNext = () => {
//   //   setCurrentPage(currentPage + 1);
//   // };

//   // const onPrev = () => {
//   //   setCurrentPage(currentPage - 1);
//   // };

//   useEffect(() => {
//     getrequests();
//   }, []);

//   return (
//     <>
//       <div className="wrapper">
//         <Banner title="Inbox" />
//         <form className="">
//           <input
//             className="search-input"
//             placeholder="Search..."
//             onChange={(e) => setSearch(e.target.value)}
//           ></input>
//         </form>
//         <div className="messages-container">
//           <div className="message-container">
//             {currentPostIndex
//               .slice(0, 5)
//               .filter((request) => {
//                 return search === ""
//                   ? request
//                   : request.Employee_id.includes(search);
//               })
//               .map((request) => (
//                 <div className="request-line">
//                   <div>
//                     <Link to={`/request/${request.id}`}>
//                       <ul className="list">
//                         <li className="name list-item">
//                           {request.Employee_id}
//                         </li>
//                         <li className="text-container list-item">
//                           {request.Name}
//                         </li>
//                         <li className="date-row list-item">{request.Date}</li>
//                       </ul>
//                     </Link>
//                   </div>
//                   <div className="button-div">
//                     <button
//                       class=" clear-btn "
//                       onClick={() => {
//                         confirmDelete(request.id);
//                       }}
//                     >
//                       <span class="text-clear">Clear</span>
//                       <span class="clear-icon">
//                         <MdDeleteOutline className="delete-icon" />
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Show;




// import React, { useState, useEffect , useReducer } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FiEdit } from "react-icons/fi";
// import {
//   collection,
//   getDocs,
//   getDoc,
//   deleteDoc,
//   doc,

// } from "firebase/firestore";
// import { db } from "../firebaseConfig/firebase";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import "./Requests.css";
// import Banner from "../Banner/Banner";
// import Create from "../EditPatients/Create";
// import Request2 from "./RequestDetails";
// import UserCard from "../User/UserCard";
// import { IoMdRefresh } from "react-icons/io";
// import RequestHeader from "./RequestHeader";
// import { MdDelete } from "react-icons/md";
// import { MdDeleteOutline } from "react-icons/md";
// import { IoMail } from "react-icons/io5";


// const MySwal = withReactContent(Swal);
// const Show = () => {
//   const [reducerValue, forceUpdate] = useReducer(x => x+1 ,0)
//   const [search, setSearch] = useState("");  
//   const [requests, setrequests] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postPerPage, setPostPerPage] = useState(20);
//   const [RequestCount, setRequestCount] = useState(0);
//   const [art, setart] = useState("");

 
//   const lastPostIndex = currentPage * postPerPage;
//   const firstPostIndex = lastPostIndex - postPerPage;
//   const currentPostIndex = requests.slice(firstPostIndex, lastPostIndex);
//   const navigate = useNavigate();
//   const [openProfile, setOpenProfile] = useState(false);

 
//   const requestsCollection = collection(db, "Requests");


  
//   useEffect(() => {
//     async function getrequests() {
//       const data = await getDocs(requestsCollection);
//       setrequests(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  

//     };
//     getrequests();
    
//   }, [reducerValue]);


  



//   function refresh(ignored) {
//     forceUpdate(ignored);
//   }

//   const deleterequest = async (id) => {
//     const requestDoc = doc(db, "Requests", id);
//     await deleteDoc(requestDoc);
//     refresh();
//   };
//   const confirmDelete = (id) => {
//     MySwal.fire({
//       title: "Clear Request?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Clear",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         deleterequest(id);
//         Swal.fire("Request", "Request Cleared", "success");
//       }
//     });
//   };

 
//   return (
//     <>
//       <div className="wrapper requests-wrapper">
//         <Banner title="Inbox" />
//         <div className="request-container">
//           <div className="request-header">     

//                 <div className="table-header mail-header">
             
//               <form className="search-request">
//               <input
//                 className="search-input-request"
//                 placeholder="What are you looking for?"
//                 onChange={(e) => setSearch(e.target.value)}
//                       ></input>  
//             <IoMdRefresh  className="refresh-btn" onClick={refresh}/>
//             </form>
//             </div>  
//               </div>
//           <div className="messages-content-container">
//             <div className="message-container">
//               {requests
//                 .filter((request) => {
//                   return search === ""
//                     ? request
//                     : request.id.includes(search);
//                 })             
//                 .map((request) => (
//                 <div key={request.id} className="request-button" onClick={() => setart(`${request.id}`)}>
//                     <ul className={`${openProfile === request.id ? 'list list-open' : 'list '}`}  onClick={()=> setOpenProfile(request.id)}>                     
//                       <div>
//                             <li>
//                             <UserCard firstName={request.name} lastName={request.Sname} />
//                             </li>
//                           </div>
//                           <div className="messages-info-container"> 
//                           <div className="top-sidebar-container">
//                           <li className="user__name">{request.name} {request.Sname}
//                             <li></li>
//                           </li> 
//                           <li className="date-row list-item date-request">
//                               {request.Date}
//                           </li>
//                           </div>
//                             <li className="date-row list-item heading-request">
//                               {request.Subject}
//                             </li>
//                             <li className=" list-item request-item">{request.Request}</li>                        
//                           </div>                          
//                       </ul>                      
//                     </div>
//                 ))}
//             </div>
//           <Request2 propos={`Requests`} get={art} />
          
//           </div>
//         </div>
        
//       </div>
//     </>
//   );
// };
// export default Show;
