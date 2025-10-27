import React from 'react'
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import "../Edit.css"
import "../Edit2.css"


const Counselling = (appointment_id) => {
 
  const [pregnant, setPregnant] = useState("");
  const [hivCounselling, setHivCounselling] = useState("");
  const [voluntaryMaleMedicalCircumcision, setVoluntaryMaleMedicalCircumcision] = useState("");
  const [voluntaryMaleMedicalCircumcisionReferral, setVoluntaryMaleMedicalCircumcisionReferral] = useState("");
  const [antenatalCareReferral, setAntenatalCareReferral] = useState("");
  const [gender, setGender] = useState("");
  const [apppath, setAppPath] = useState(appointment_id.appointment_id);



  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const patient = doc(db, `Clients/${id}/ 2024/${apppath}/Capture Data/Data`);
    const data = {
      pregnant:pregnant,
      hivCounselling:hivCounselling,
      voluntaryMaleMedicalCircumcision:voluntaryMaleMedicalCircumcision,
      voluntaryMaleMedicalCircumcisionReferral:voluntaryMaleMedicalCircumcisionReferral,
      antenatalCareReferral:antenatalCareReferral,
    
      
    };
    await updateDoc(patient, data);
    if ((e = true)) {
      Swal.fire({
        confirmButtonColor: "#C1151B ",
        title: "Patient Record Updated",
        text: "",
        icon: "success",
      });
      navigate("/Show");
    } else {
      Swal.fire({
        buttonsStyling: true,
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, `Clients/${id}/ 2024/${apppath}/Capture Data/Data`));
    if (product.exists()) {
      //console.log(product.data())
      setPregnant(product.data().pregnant)
      setHivCounselling(product.data().hivCounselling)
      setVoluntaryMaleMedicalCircumcision(product.data().voluntaryMaleMedicalCircumcision)
      setVoluntaryMaleMedicalCircumcisionReferral(product.data().voluntaryMaleMedicalCircumcisionReferral)
      setAntenatalCareReferral(product.data().antenatalCareReferral)
      setGender(product.data().gender)

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
            
            <form  onSubmit={update} className={`${gender === "Female" ? '' : 'gender-visibility'}`}>
            <div className='appointment-edit-header'>
            <p className='top-text'>View and Edit Patient Records : </p>
            <div className='edit-appointment-info-container'>
            <p className='appointment-client-info'>Appointment ID : {apppath}</p>
            <p className='appointment-client-info'>Client ID : {id} </p>
          </div>
          </div>          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>Pregnancy Counselling: </label>

                <input
               placeholder={pregnant}
               onChange={(e) => setPregnant(e.target.value)}
                 type="text"
                 className="appointment-data-field"
                         />
          </div>
          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>Hiv Test Counselling</label>
                  <input
                  placeholder={hivCounselling}
                  onChange={(e) => setHivCounselling(e.target.value)}
                    type="text"
                    className="appointment-data-field"
                            />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Antenatal Care Counselling</label>

                <input
                placeholder={antenatalCareReferral}
                onChange={(e) => setAntenatalCareReferral(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
              {/* <div className="btn-container">
                <button type="submit" className="update-btn">
                Update
                            </button>
              </div> */}
            </form>
            {/* <div class="middle-border"></div> */}
            <form  onSubmit={update} className={`${gender === "Male" ? '' : 'gender-visibility'}`}>
          <p className='top-text'>View and Edit Patient Records : </p>
          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>VMMC Counselling</label>

                <input
               placeholder={voluntaryMaleMedicalCircumcision}
               onChange={(e) => setVoluntaryMaleMedicalCircumcision(e.target.value)}
                 type="text"
                 className="appointment-data-field"
                         />
              
          </div>
          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>VMMC Referral</label>
                
                <input
                placeholder={voluntaryMaleMedicalCircumcisionReferral}
                onChange={(e) => setVoluntaryMaleMedicalCircumcisionReferral(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
              
          </div>
          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>Hiv Test Counselling</label>
                  <input
                  placeholder={hivCounselling}
                  onChange={(e) => setHivCounselling(e.target.value)}
                    type="text"
                    className="appointment-data-field"
                            />
          </div>
              {/* <div className="btn-container">
                <button type="submit" className="update-btn">
                Update
                            </button>
              </div> */}
            </form>
            <form  onSubmit={update} className={`${gender === "Other" ? '' : 'gender-visibility'}`}>
          <p className='top-text'>View and Edit Patient Records : </p>
          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>Pregnancy Counselling: </label>

                <input
               placeholder={pregnant}
               onChange={(e) => setPregnant(e.target.value)}
                 type="text"
                 className="appointment-data-field"
                         />
              
          </div>
          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>Hiv Test Counselling</label>
                  <input
                  placeholder={hivCounselling}
                  onChange={(e) => setHivCounselling(e.target.value)}
                    type="text"
                    className="appointment-data-field"
                            />
              
          </div>
        
              
          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>VMMC Counselling</label>
                
                <input
                placeholder={voluntaryMaleMedicalCircumcision}
                onChange={(e) => setVoluntaryMaleMedicalCircumcision(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Antenatal Care Counselling</label>

                <input
                placeholder={antenatalCareReferral}
                onChange={(e) => setAntenatalCareReferral(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>VMMC Referral</label>

                <input
               placeholder={voluntaryMaleMedicalCircumcisionReferral}
               onChange={(e) => setVoluntaryMaleMedicalCircumcisionReferral(e.target.value)}
                 type="text"
                 className="appointment-data-field"
                         />
              
          </div>
              {/* <div className="btn-container">
                <button type="submit" className="update-btn">
                Update
                            </button>
              </div> */}
            </form>
          </div>
    </div>
  )
}

export default Counselling