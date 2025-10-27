import React, { useState, useEffect , useReducer } from "react";
import { setDoc, doc, deleteDoc,getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import UserCard from "../User/UserCard";
import "./requestDetails.css";

import { RiDeleteBin2Fill } from "react-icons/ri";

export default function ChildrenList({ propos , get , open}) {

  const MySwal = withReactContent(Swal);

  const [reducerValue, forceUpdate] = useReducer(x => x+1 ,0)

  const [date, setDate] = useState("");
  const [employeeId, setEmployee_id] = useState("");
  const [favourite, setFavourite] = useState("No");
  const [name, setName] = useState("");
  const [sName, setSname] = useState("");
  const [request, setRequest] = useState("");
  const [requestId, setRequestId] = useState("");
  const [title, setTitle] = useState("");
  const [openState, setOpenState] = useState(open);

  const [favState, setFavState] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState("Yes");

  useEffect(() => {
    const fetchData = async (get) => {
        const  product  = await getDoc(doc(db, propos, get));
        if (product.exists()) {
          setDate(product.data().Date);
          setEmployee_id(product.data().Employee_id);
          setFavourite(product.data().Favourite);
          setName(product.data().Name);
          setRequest(product.data().Request);
          setRequestId(product.data().id);
          setSname(product.data().Sname);
          setTitle(product.data().Title);
    
        } else {
          console.log("Message doesnt exist");
        }
    }

  fetchData(get)
})
  
  function refresh(ignored) {
    forceUpdate(ignored);
  }
  const deleterequest = async (get) => {
    const requestDoc = doc(db, "Requests", get);
    await deleteDoc(requestDoc);
    open = false; 
  };

  const store = async (get) => {
    await setDoc(doc(db, "Requests_Deleted", `${get}`), {
      Name: name,
      Sname: sName,
      Employee_id: employeeId,
      Request: request,
      id: requestId,
      Date:date,
      Title:title
    });
  };

  const confirmDelete = (get) => {
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
        store(get)
        deleterequest(get);
        setDate("");
        setEmployee_id("");
        setFavourite("");
        setName("");
        setRequest("");
        setRequestId("");
        setSname("");
        setTitle("");
        open = false;
        Swal.fire("Request", "Request Cleared", "success");
      }
    });
  };


  return (
    <div className='messages-content-top-container '>
      <div  className={`
      ${open === true ? "request-header" : "container-hide"}
  `}>
      <div className="request-header-info">
          <UserCard firstName={name} lastName={sName} />
          <div className="request-employee-info-container">
            <h6>{name} {sName}</h6>
            <p className="employee-id-styling">{employeeId}</p>
          </div>  
        </div>
        
      </div>
        <div className={`
      ${open === true ? "message-details-container" : "container-hide"}
  `}>
      <p className="request-date-styling">{date}</p>
      <h4 className="request-title-styling">{title}</h4>
      <p className="request-greeting">Good Day,  </p>
      <p className="request-details">{request}</p>
        <div className={`
    ${propos === "Requests" ? 'request-btn-container' : 'request-btn-container container-hide'}
`}>
          <button className="request-delete-btn"
          onClick={() => { confirmDelete(get)}  }
                  >
                      Delete<RiDeleteBin2Fill  className="request-delete-icon"/>
                    </button>
        </div>
        </div>
         
    </div>
  );
}
