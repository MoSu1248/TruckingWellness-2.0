import React from 'react'
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const Referrals = (appointment_id) => {
   const [antenatalCare, setAntenatalCare] = useState("");
   const [art, setArt ] = useState("");
   const [elisa, setElisa] = useState("");
   const [familyPlanning, setFamilyPlanning] = useState("");
   const [genderBasedViolence, setGenderBasedViolence] = useState("");
   const [ncdsTreatmentSupport, setNcdsTreatmentSupport] = useState("");
   const [preArt, setPreArt] = useState("");
   const [pmtct, setPmtct] = useState("");
   const [socialService, setSocialService] = useState("");
   const [stiTest, setStiTest] = useState("");
   const [voluntaryMaleMedicalCircumcision, setVoluntaryMaleMedicalCircumcision] = useState("");
   const [tBTest, setTBTest] = useState("");
   const [comments, setComments] = useState("");
   const [otherReferrals, setOtherReferrals] = useState("");
   const [referralFacility, setreferralFacility] = useState("");
   const [preferredFacility, setPreferredFacility] = useState("");
   const [apppath, setAppPath] = useState(appointment_id.appointment_id);



  const navigate = useNavigate();
  const { id } = useParams();

  

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, `Clients/${id}/ 2024/${apppath}/Capture Data/Data`));
    if (product.exists()) {
      //console.log(product.data())
      setAntenatalCare(product.data().antenatalCare);
      setArt(product.data().art)
      setPreArt(product.data().preArt)
      setElisa(product.data().elisa)
      setFamilyPlanning(product.data().familyPlanning)
      setGenderBasedViolence(product.data().genderBasedViolence)
      setNcdsTreatmentSupport(product.data().ncdsTreatmentSupport)
      setPmtct(product.data().pmtct)
       setSocialService(product.data().socialService)
      setStiTest(product.data().stiTest)
      setVoluntaryMaleMedicalCircumcision(product.data().voluntaryMaleMedicalCircumcisionReferral)
      setTBTest(product.data().tBTest)
      setComments(product.data().comments)
      setOtherReferrals(product.data().otherReferrals)
      setreferralFacility(product.data().referralFacility)
      setPreferredFacility(product.data().preferredFacility)

      
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
                <label htmlFor="nurse_input" className='appointment-data-label'>Pmtct</label>
                  <input
                  placeholder={pmtct}
                  onChange={(e) => setPmtct(e.target.value)}
                type="text"
                disabled={true}
                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Antenatal Care</label>
                  <input
                  placeholder={antenatalCare}
                  onChange={(e) => setAntenatalCare(e.target.value)}
                type="text"
                disabled={true}
                    className="appointment-data-field"
                            />
            </div>
            
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Art</label>
                
                <input
                placeholder={art}
                onChange={(e) => setArt(e.target.value)}
                type="text"
                disabled={true}

                  className="appointment-data-field"
                />
              </div>
          </div>
          <div className="appointment-data-container appointment-row-styling">
              <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Preart</label>
                  <input
                  placeholder={preArt}
                  onChange={(e) => setPreArt(e.target.value)}
                type="text"
                disabled={true}

                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Elisa</label>
                
                <input
                placeholder={elisa}
                onChange={(e) => setElisa(e.target.value)}
                type="text"
                disabled={true}

                  className="appointment-data-field"
                />
            </div>
            <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Family Planning</label>
                  <input
                  placeholder={familyPlanning}
                  onChange={(e) => setFamilyPlanning(e.target.value)}
                type="text"
                disabled={true}
                    className="appointment-data-field"
                            />
              </div>
            </div>
            <div className="appointment-data-container appointment-row-styling">
              <div className='fill-width'> 
              <label htmlFor="nurse_input" className='appointment-data-label'>Gender Based Violence</label>
              <input
                placeholder={genderBasedViolence}
                onChange={(e) => setGenderBasedViolence(e.target.value)}
              type="text"
              disabled={true}

                  className="appointment-data-field"
                />
              </div>
              <div className='fill-width'>
              <label htmlFor="nurse_input" className='appointment-data-label'>Ncds Treament</label>
                
              <input
                placeholder={ncdsTreatmentSupport}
                onChange={(e) => setNcdsTreatmentSupport(e.target.value)}
              type="text"
              disabled={true}

                  className="appointment-data-field"
                />
            </div>
            <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Social Services</label>
                  <input
                  placeholder={socialService}
                  onChange={(e) => setSocialService(e.target.value)}
                type="text"
                disabled={true}
                    className="appointment-data-field"
                            />
              </div>
            </div>
            <div className="appointment-data-container appointment-row-styling">
              <div className='fill-width'> 
              <label htmlFor="nurse_input" className='appointment-data-label'>Sti Test</label>
              <input
                placeholder={stiTest}
                onChange={(e) => setStiTest(e.target.value)}
              type="text"
              disabled={true}

                  className="appointment-data-field"
                />
              </div>
              <div className='fill-width'>
              <label htmlFor="nurse_input" className='appointment-data-label'>VMMC</label>
                
              <input
                placeholder={voluntaryMaleMedicalCircumcision}
                onChange={(e) => setVoluntaryMaleMedicalCircumcision(e.target.value)}
              type="text"
              disabled={true}

                  className="appointment-data-field"
                />
            </div>
            <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Tb Test</label>
                  <input
                  placeholder={tBTest}
                  onChange={(e) => setTBTest(e.target.value)}
                type="text"
                disabled={true}
                    className="appointment-data-field"
                            />
              </div>
           </div>
           <div className='appointment-data-container' >
          <label htmlFor="nurse_input" className='appointment-data-label'>Comments </label>

                <textarea
               placeholder={comments}
               onChange={(e) => setComments(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
          </div>
          <div className='appointment-data-container' >
          <label htmlFor="nurse_input" className='appointment-data-label'>Other Referrals </label>

                <textarea
               placeholder={otherReferrals}
               onChange={(e) => setOtherReferrals(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
          </div>
          <div className='appointment-data-container' >
          <label htmlFor="nurse_input" className='appointment-data-label'>Referral Facility </label>

                <input
               placeholder={referralFacility}
               onChange={(e) => setreferralFacility(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
          </div>
          <div className='appointment-data-container' >
          <label htmlFor="nurse_input" className='appointment-data-label'>Preferred Facility</label>

                <textarea
               placeholder={preferredFacility}
               onChange={(e) => setPreferredFacility(e.target.value)}
              type="text"
              disabled={true}

                 className="appointment-data-field"
                         />
              
          </div>
            </form>
          
            
          </div>
    </div>
  )
}

export default Referrals