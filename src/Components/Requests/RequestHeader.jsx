// import { useCollectionData } from "react-firebase-hooks/firestore";
// // import AddNew from "./AddNew";
// import { setDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
// import { collection, getDocs, limit, query, where } from "firebase/firestore";
// import { db } from "../firebaseConfig/firebase";
// import UserCard from "../User/UserCard"
// import "./requestheader.css"
// import { AiFillClockCircle } from "react-icons/ai";
// import withReactContent from "sweetalert2-react-content";
// import Swal from "sweetalert2";


// export default function RequestHeader({ propos , get }) {
//   const q = query(collection(db, propos), where("docId", "==", `${get}`));
//   const [docs, loading, error] = useCollectionData(q);

//   return (
//     <div className="messages-name-info-container">

//       {docs?.map((doc) => (
//         <div className="request-header-container">
//           <div>
//           <UserCard key={doc.id} firstName={doc.name} lastName={doc.Sname} />

//           </div>
//           <div className="request-header-info">
//             <h5 className="request-header-name">{doc.name} {doc.Sname}</h5>
//                 <h6 className="request-header-email">{doc.userEmail}</h6>
//           </div>
//           <div className="date-container">
//               <AiFillClockCircle className="date-icon" />
//             <h6 className="request-header-date">
//               {doc.Date}</h6>

//           </div>
//           {/* <li >{doc.empid}</li> */}

//           {loading && "Loading..."}       
//         </div>
        
//       ))}

//       {/* <AddNew path={path} />
//       <p>{path}</p> */}
//     </div>
//   );
// }
