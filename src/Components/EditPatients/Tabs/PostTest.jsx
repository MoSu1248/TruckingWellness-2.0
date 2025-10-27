import React from 'react'
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import "../Edit.css"
import "../Edit2.css"
const PostTest = (appointment_id) => {
  
  const [maleCondoms, setMaleCondoms] = useState("");
  const [femaleCondoms, setFemaleCondoms] = useState("");
  const [lubricants, setLubricants] = useState("");
  const [postTestCounselling, setPostTestCounselling] = useState("");
  const [informedOfHivTestResult, setInformedOfHivTestResult] = useState("");
  const [Medication_Administered, setMedication_Administered] = useState("");
  const [flagged, setFlagged] = useState("");
  const [flagReason, setFlagReason] = useState("");
  const [apppath, setAppPath] = useState(appointment_id.appointment_id);

  const navigate = useNavigate();
  const { id } = useParams();

  

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, `Clients/${id}/ 2024/${apppath}/Capture Data/Data`));
    if (product.exists()) {
      //console.log(product.data())
      setMaleCondoms(product.data().maleCondoms);
      setFemaleCondoms(product.data().femaleCondoms)
      setLubricants(product.data().lubricants)
      setPostTestCounselling(product.data().postTestCounselling)
      setInformedOfHivTestResult(product.data().informedOfHivTestResult)
      setMedication_Administered(product.data().Medication_Administered)
      setFlagged(product.data().Flagged)
      setFlagReason(product.data().flagReason)

      
    } else {
      console.log("Patient doesnt exist");
    }
  };

  useEffect(() => {
    getProductById(id);
    // eslint-disable-next-line
  });


  return (
<div className="">
          <div className="">
            
            <form >
            <div className='appointment-edit-header'>
            <p className='top-text'>View and Edit Patient Records : </p>
            <div className='edit-appointment-info-container'>
              <p className='appointment-client-info'>Appointment ID : {apppath}</p>
            <p className='appointment-client-info'>Client ID : {id} </p>
          </div>
          </div>            <div className="appointment-data-container appointment-row-styling">

              <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Male Condoms</label>
                  <input
                  placeholder={maleCondoms}
                  onChange={(e) => setMaleCondoms(e.target.value)}
                type="text"
                disabled={true}
                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Female Condoms</label>
                
                <input
                placeholder={femaleCondoms}
                onChange={(e) => setFemaleCondoms(e.target.value)}
                type="text"
                disabled={true}

                  className="appointment-data-field"
                />
              </div>
          </div>
              <div className="appointment-data-container appointment-row-styling">
              <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Lubricants</label>
                  <input
                  placeholder={lubricants}
                  onChange={(e) => setLubricants(e.target.value)}
                type="text"
                disabled={true}

                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Post Test Councelling</label>
                
                <input
                placeholder={postTestCounselling}
                onChange={(e) => setPostTestCounselling(e.target.value)}
                type="text"
                disabled={true}

                  className="appointment-data-field"
                />
              </div>
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Informed of Hiv Results</label>

                <input
                placeholder={informedOfHivTestResult}
                onChange={(e) => setInformedOfHivTestResult(e.target.value)}
              type="text"
              disabled={true}

                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Medication</label>

                <textarea
                placeholder={Medication_Administered}
                onChange={(e) => setMedication_Administered(e.target.value)}
              type="text"
              disabled={true}

                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Flagged</label>

                <input
                placeholder={flagged}
                onChange={(e) => setFlagged(e.target.value)}
              type="text"
              disabled={true}

                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Flagged Reasoning </label>

            <textarea
              
                placeholder={flagReason}
                onChange={(e) => setFlagReason(e.target.value)}
              type="text"
              disabled={true}

                  className="  appointment-data-field"
                />
          </div>
            
            </form>
            {/* <div class="middle-border"></div> */}
          
            
          </div>
    </div>
  )
}

export default PostTest