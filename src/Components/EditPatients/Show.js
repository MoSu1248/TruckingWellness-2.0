// import React, { useState, useEffect } from "react";
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
// import { async } from "@firebase/util";
// import Pagination from "./Pagination";
// import { HiOutlineUserGroup } from "react-icons/hi";
// import { MdDeleteOutline } from "react-icons/md";
// import Banner from "../Banner/Banner";
// import SelectLimit from "./selectLimit";
// const MySwal = withReactContent(Swal);
// const Show = () => {
//   const [search, setSearch] = useState("");
  
//   const [patients, setpatients] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postPerPage, setPostPerPage] = useState(50);
//   const navigate = useNavigate();
//   const lastPostIndex = currentPage * postPerPage;
//   const firstPostIndex = lastPostIndex - postPerPage;
//   const currentPostIndex = patients.slice(firstPostIndex, lastPostIndex);

//   const patientsCollection = collection(db, "Clients");

//   const getpatients = async () => {
//     const data = await getDocs(patientsCollection);
//     setpatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };

//   const deleterequest = async (id) => {
//     const requestDoc = doc(db, "Client", id);
//     await deleteDoc(requestDoc);
//     getpatients();
//   };
//   const confirmDelete = (id) => {
//     MySwal.fire({
//       title: "Are you Sure",
//       text: "You want to remove this client?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Delete",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         deleterequest(id);
//         Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
//     getpatients();
//   }, []);

//   return (
//     <>
//       <div className="wrapper">
//         <Banner title=" Edit Clients" />

//         <div className="edit-patient-container">
//           <div className="row-container">
//             <div className="">
//               <div className="d-grid gap-2"></div>
//               <div className="table-header">
//                 <HiOutlineUserGroup className="Edit-icon" />
//                 <h2 className="clients-header">Recent Clients</h2>
//               </div>
//               <form className="request-search-container">
//                 <input
//                   className="search-input "
//                   placeholder="Search..."
//                   onChange={(e) => setSearch(e.target.value)}
//                   value={search}
//                 ></input>
//               </form>
//               <table className="table table table-hover .table-data">
//                 <thead className="heading-row ">
//                   <tr>
//                     <th>Patient ID</th>
//                     <th>Patient Name</th>
//                     <th>Patient Surname</th>
//                     <th>Gender</th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentPostIndex
//                     .filter((request) => {
//                       return search === ""
//                         ? request
//                         : request.id.includes(search);
//                     })
//                     .slice(0, 10)
//                     .map((request) => (
//                       <tr key={request.id} className="table-row">
//                         <td>{request.id}</td>
//                         <td>{request.Name}</td>
//                         <td>{request.Patient_id}</td>
//                         <td>{request.Request}</td>
//                         <td>
//                           <Link to={`/Edit/${request.id}`}>
//                             <i className="edit-btn">
//                               {" "}
//                               <FiEdit />
//                             </i>
//                           </Link>
//                           <button
//                             className="delete-btn"
//                             onClick={() => {
//                               confirmDelete(request.id);
//                             }}
//                           >
//                             <i>
//                               <MdDeleteOutline />
//                             </i>
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className="pagina"></div>
//           <SelectLimit onLimitChange={setPostPerPage} /> 

//         </div>
//       </div>
//     </>
//   );
// };

// export default Show;
