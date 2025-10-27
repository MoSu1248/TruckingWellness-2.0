import React from 'react'
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const WellnessMeasurement = (appointment_id) => {

    const [undergoWellnessMeasurement, setUndergoWellnessMeasurement] = useState("");
    const [bloodPressureSystolicUpper, setBloodPressureSystolicUpper] = useState("");
    const [bloodPressureDiastolicLower, setBloodPressureDiastolicLower] = useState("");
    const [heartRate, setHeartRate] = useState("");
    const [bloodSugar, setBloodSugar] = useState("");
    const [cholesterol, setCholesterol] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [sugarRetest, setSugarRetest] = useState("");
    const [lowerBloodPressureRetest, setLowerBloodPressureRetest] = useState("");
    const [upperBloodPressureRetest, setUpperBloodPressureRetest] = useState("");
    const [bmiStatus, setBmiStatus] = useState("");
    const [bmi, setBmi] = useState("");
    const [apppath, setAppPath] = useState(appointment_id.appointment_id);
    


  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const patient = doc(db, `Clients/${id}/ 2024/${apppath}/Capture Data/Data`);
    const data = {
   
    undergoWellnessMeasurement:undergoWellnessMeasurement,
    height:height , 
    weight:weight,
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
      
        setUndergoWellnessMeasurement(product.data().undergoWellnessMeasurement)
        setBloodPressureSystolicUpper(product.data().bloodPressureSystolicUpper)
        setBloodPressureDiastolicLower(product.data().bloodPressureDiastolicLower)
        setCholesterol(product.data().cholesterol)
        setWeight(product.data().weight)
        setHeight(product.data().height)
        setHeartRate(product.data().heartRate)
        setBloodSugar(product.data().bloodSugar)
        setBmi(product.data().bmi)
        setBmiStatus(product.data().bmiStatus)
        setSugarRetest(product.data().sugarRetest)
        setLowerBloodPressureRetest(product.data().lowerBloodPressureRetest)
        setUpperBloodPressureRetest(product.data().upperBloodPressureRetest)
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
            
            <form  onSubmit={update}>
            <div className='appointment-edit-header'>
            <p className='top-text'>View and Edit Patient Records : </p>
            <div className='edit-appointment-info-container'>
            <p className='appointment-client-info'>Appointment ID : {apppath}</p>
            <p className='appointment-client-info'>Client ID : {id} </p>
          </div>
          </div>          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Undergo Wellness Measurement</label>

                <input
                placeholder={undergoWellnessMeasurement}
                onChange={(e) => setUndergoWellnessMeasurement(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
        
            <div className="appointment-data-container appointment-row-styling">
              <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Blood Pressure Systolic Upper</label>
                  <input
                  placeholder={bloodPressureSystolicUpper}
                  onChange={(e) => setBloodPressureSystolicUpper(e.target.value)}
                    type="text"
                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Blood Pressure Diastolic Lower</label>
                
                <input
                placeholder={bloodPressureDiastolicLower}
                onChange={(e) => setBloodPressureDiastolicLower(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
            </div>
            </div>   
                  <div className="appointment-data-container">
                  <label htmlFor="nurse_input" className='appointment-data-label'>Heart Rate</label>
                
                <input
                placeholder={heartRate}
                onChange={(e) => setHeartRate(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Blood Sugar</label>

                <input
                placeholder={bloodSugar}
                onChange={(e) => setBloodSugar(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
                  </div>
                  
                  <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Cholesterol</label>

                <input
                placeholder={cholesterol}
                onChange={(e) => setCholesterol(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
                  </div>
                  
                  <div className="appointment-data-container appointment-row-styling">
              <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Height</label>
                  <input
                  placeholder={height+" m"}
                  onChange={(e) => setHeight(e.target.value)}
                    type="text"
                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Weight</label>
                
                <input
                placeholder={weight+" Kg"}
                onChange={(e) => setWeight(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
            </div>
            
                  </div>  

                  <div className="appointment-data-container appointment-row-styling">
              <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Bmi</label>
                  <input
                  placeholder={bmi}
                  onChange={(e) => setBmi(e.target.value)}
                    type="text"
                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Bmi Status</label>
                
                <input
                placeholder={bmiStatus}
                onChange={(e) => setBmiStatus(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
            </div>
            
                  </div>  


        <div className={`${(lowerBloodPressureRetest || upperBloodPressureRetest) !== "" ? '' : 'test-kit-container gender-visibility'}`}>
          <p className='hiv-heading'>Measurement Retests : </p>

            <div className="appointment-data-container appointment-row-styling">
              <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Lower Blood Pressure Retest</label>
                  <input
                  placeholder={lowerBloodPressureRetest}
                  onChange={(e) => setLowerBloodPressureRetest(e.target.value)}
                    type="text"
                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Upper Blood Pressure Retest</label>
                
                <input
                placeholder={upperBloodPressureRetest}
                onChange={(e) => setUpperBloodPressureRetest(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
            </div>
            </div> 

                  </div>
        <div className={`${( sugarRetest) !== "" ? 'retest-styling' : 'test-kit-container gender-visibility'}`}>
          <p className='hiv-heading'>Measurement Retests : </p>

          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>Sugar Retest</label>

                <input
               placeholder={sugarRetest}
               onChange={(e) => setSugarRetest(e.target.value)}
                              type="text"
                              disabled={true}
                 className="appointment-data-field"
                         />
            </div>
                </div>
          
              {/* <div className="btn-container">
                <button type="submit" className="update-btn">
                Update
                            </button>
              </div> */}
              
            </form>
            {/* <div class="middle-border"></div> */}
            
            
          </div>
    </div>
  )
}

export default WellnessMeasurement