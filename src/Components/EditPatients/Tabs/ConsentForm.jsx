import React from 'react'
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import "../Edit.css"
import "../Edit2.css"
const ConsentForm = (appointment_id) => {

  const [rapidTest, setRapidTest] = useState("");
  const [followUpHomeVisit, setFollowUpHomeVisit] = useState("");
  const [callCenterFollowUp, setCallCenterFollowUp] = useState("");
  const [allowAnonymousData, setAllowAnonymousData] = useState("");
  const [hivConsent, setHivConsent] = useState("");
  const [storageDataConsent, setStorageDataConsent] = useState("");
  const [apppath, setAppPath] = useState(appointment_id.appointment_id);



  const navigate = useNavigate();
  const { id } = useParams();

  

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, `Clients/${id}/ 2024/${apppath}/Capture Data/Data`));
    if (product.exists()) {
      setRapidTest(product.data().rapidTest);
      setFollowUpHomeVisit(product.data().followUpHomeVisit)
      setCallCenterFollowUp(product.data().callCenterFollowUp)
      setAllowAnonymousData(product.data().allowAnonymousData)
      setHivConsent(product.data().hivConsent)
      setStorageDataConsent(product.data().storageDataConsent)
    } else {
      console.log("Patient doesnt exist");
    }
  };

  useEffect(() => {
    getProductById(id);
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
                <label htmlFor="nurse_input" className='appointment-data-label'>Rapid Test</label>
                  <input
                  placeholder={rapidTest}
                  onChange={(e) => setRapidTest(e.target.value)}
                type="text"
                disabled={true}
                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Home Visit</label>
                
                <input
                placeholder={followUpHomeVisit}
                onChange={(e) => setFollowUpHomeVisit(e.target.value)}
                type="text"
                disabled={true}

                  className="appointment-data-field"
                />
              </div>
          </div>
              <div className="appointment-data-container appointment-row-styling">
              <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Call Center Follow Up</label>
                  <input
                  placeholder={callCenterFollowUp}
                  onChange={(e) => setCallCenterFollowUp(e.target.value)}
                type="text"
                disabled={true}

                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Data Reporting</label>
                
                <input
                placeholder={allowAnonymousData}
                onChange={(e) => setAllowAnonymousData(e.target.value)}
                type="text"
                disabled={true}

                  className="appointment-data-field"
                />
              </div>
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>HIV Test Consent</label>

                <input
                placeholder={hivConsent}
                onChange={(e) => setHivConsent(e.target.value)}
              type="text"
              disabled={true}

                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Cloud Storage Consent</label>

                <input
                placeholder={storageDataConsent}
                onChange={(e) => setStorageDataConsent(e.target.value)}
              type="text"
              disabled={true}

                  className="appointment-data-field"
                />
          </div>
          
            
            </form>
            {/* <div class="middle-border"></div> */}
          
            
          </div>
    </div>
  )
}

export default ConsentForm


