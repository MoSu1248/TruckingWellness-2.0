import React from 'react'
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db  } from "../firebaseConfig/firebase";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import './nursePopup.css'

const EditInfo = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  
  const [nurseID, setNurseId] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();


  const getProductById = async (id) => {
    const product = await getDoc(doc(db, `Nurses/${id}`));
    if (product.exists()) {
      setName(product.data().Name)
      setNurseId(product.data().NurseID)
      setSurname(product.data().Surname)
     
    } else {
      console.log("Failed to load Info");
    }
  };



  // const update = async (e) => {
  //   e.preventDefault();
  //   const patient = doc(db, `Nurses/${id}`);
  //   const data = {
  //     Name: name,
  //     NurseID: nurseID,
  //     Surname:surname,
      
  //   };
  //   await updateDoc(patient, data);
  //   if ((e = true)) {
  //     Swal.fire({
  //       confirmButtonColor: "#C1151B ",
  //       title: "Patient Record Updated",
  //       text: "",
  //       icon: "success",
  //     });
  //   } else {
  //     Swal.fire({
  //       buttonsStyling: true,
  //       icon: "error",
  //       title: "Oops...",
  //       text: "Something went wrong!",
  //     });
  //   }
  // };

  // Your Firebase SDK Initialization code here


const docRef = doc( db, `Nurses/${id}`);

const data = {
  Name: name,
      NurseID: nurseID,
      Surname:surname,
};


  
const update = async (e) => {
  updateDoc(docRef, data)
  .then(docRef => {
      console.log("A New Document Field has been added to an existing document");
  })
  .catch(error => {
      console.log(error);
  })
};

  useEffect(() => {
    getProductById(id);
  });

  return (
    <form onSubmit={update} className='nurse-edit-container'>
      <h1>Edit User info</h1>
      <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Name</label>

                <input
                placeholder={name}
                onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Surname</label>

                <input
                placeholder={surname}
                onChange={(e) => setSurname(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
          
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Nurse ID</label>

                <input
                placeholder={nurseID}
                onChange={(e) => setNurseId(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
          <div className="btn-container">
                <button type="submit" className="update-btn">
                Update
                            </button>
              </div>
    </form>
  )
}

export default EditInfo