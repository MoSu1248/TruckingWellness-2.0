import React from 'react'
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const HIVTest = (appointment_id) => {

 
  const [smoke, setSmoke] = useState("");
  const [numCigarettesDay, setNumCigarettesDay] = useState("");
  const [quitSmoking, setQuitSmoking] = useState("");
  const [exercise, setExercise] = useState("");
  const [increaseExerciseLevel, setIncreaseExerciseLevel] = useState("");
  const [highlyStressed, setHighlyStressed] = useState("");
  const [managingStress, setManagingStress] = useState("");
  const [sleepingProblems, setSleepingProblems] = useState("");
  const [emotionalWellness, setEmotionalWellness] = useState("");
  const [otherIllness, setOtherIllness] = useState("");
  const [mostImpactIllness, setMostImpactIllness] = useState("");
  const [emotionalWellnessCounselling, setEmotionalWellnessCounselling] = useState("");
  const [manageFinanceBetter, setManageFinanceBetter] = useState("");
  const [apppath, setAppPath] = useState(appointment_id.appointment_id);



  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const patient = doc(db, `Clients/${id}/ 2024/${apppath}/Capture Data/Data`);
    const data = {
     
      smoke: smoke,
      numCigarettesDay: numCigarettesDay,
      quitSmoking: quitSmoking, 
      Exercise: exercise,
      increaseExerciseLevel:increaseExerciseLevel
      
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
      setSmoke(product.data().smoke)
      setNumCigarettesDay(product.data().numCigarettesDay)
      setQuitSmoking(product.data().quitSmoking)
      setExercise(product.data().Exercise)
      setIncreaseExerciseLevel(product.data().increaseExerciseLevel)
      setHighlyStressed(product.data().highlyStressed)
      setManagingStress(product.data().managingStress)
      setSleepingProblems(product.data().sleepingProblems)
      setEmotionalWellness(product.data().emotionalWellness)
      setOtherIllness(product.data().otherIllness)
      setMostImpactIllness(product.data().mostImpactIllness)
      setEmotionalWellnessCounselling(product.data().emotionalWellnessCounselling)
      setManageFinanceBetter(product.data().manageFinanceBetter)
     
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
            
            <form  onSubmit={update}>
            <div className='appointment-edit-header'>
            <p className='top-text'>View and Edit Patient Records : </p>
            <div className='edit-appointment-info-container'>
            <p className='appointment-client-info'>Appointment ID : {apppath}</p>
            <p className='appointment-client-info'>Client ID : {id} </p>
          </div>
          </div>          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>Do you smoke </label>

                <input
               placeholder={smoke}
               onChange={(e) => setSmoke(e.target.value)}
                 type="text"
                 className="appointment-data-field"
                         />
              
          </div>
        
            <div className="appointment-data-container appointment-row-styling">
              <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Daily number of cigarettes</label>
                  <input
                  placeholder={numCigarettesDay}
                  onChange={(e) => setNumCigarettesDay(e.target.value)}
                    type="text"
                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Would you like to quit</label>
                
                <input
                placeholder={quitSmoking}
                onChange={(e) => setQuitSmoking(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
            </div>
          </div>   
          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>Are you doing any exercise</label>

                <input
                placeholder={exercise}
                onChange={(e) => setExercise(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Increase level of activity</label>

                <input
                placeholder={increaseExerciseLevel}
                onChange={(e) => setIncreaseExerciseLevel(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>High Stressed</label>

                <input
                placeholder={highlyStressed}
                onChange={(e) => setHighlyStressed(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Managing Stress</label>

                <input
                placeholder={managingStress}
                onChange={(e) => setManagingStress(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Sleeping Problems</label>

                <input
                placeholder={sleepingProblems}
                onChange={(e) => setSleepingProblems(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>

          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Emotional Wellness</label>

                <input
                placeholder={emotionalWellness}
                onChange={(e) => setEmotionalWellness(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div> <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Other Illnesses</label>

                <input
                placeholder={otherIllness}
                onChange={(e) => setOtherIllness(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Most impacted illness</label>

                <input
                placeholder={mostImpactIllness}
                onChange={(e) => setMostImpactIllness(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Emotional Wellness Counselling</label>

                <input
                placeholder={emotionalWellnessCounselling}
                onChange={(e) => setEmotionalWellnessCounselling(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Increase level of activity</label>

                <input
                placeholder={manageFinanceBetter}
                onChange={(e) => setManageFinanceBetter(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
              
            </form>
            {/* <div class="middle-border"></div> */}
          
            
          </div>
    </div>
  )
}

export default HIVTest