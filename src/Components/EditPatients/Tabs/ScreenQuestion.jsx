import React from 'react'
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const ScreenQuestion = (appointment_id) => {

  const [covid, setCovid] = useState("");
  const [numTimesHadCovid, setNumTimesHadCovid] = useState("");
  const [fullyVaccinated, setfullyVaccinated] = useState("");
  const [reasonNotVaccinated, setReasonNotVaccinated] = useState("");
  const [currentTbTreatment, setCurrentTbTreatment] = useState("");
  const [nightSweats, setNightSweats] = useState("");
  const [coughLongerThanTwoWeeks, setCoughLongerThanTwoWeeks] = useState("");
  const [weightLoss, setWeightLoss] = useState("");
  const [feverPersisting, setFeverPersisting] = useState("");
  const [stiTreatment, setStiTreatment] = useState("");
  const [burningPainPassingUrine, setBurningPainPassingUrine] = useState("");
  const [dischargeSmells, setDischargeSmells] = useState("");
  const [itchingGenitalsEtc, setItchingGenitalsEtc] = useState("");
  const [unprotectedSex, setUnprotectedSex] = useState("");
  const [apppath, setAppPath] = useState(appointment_id.appointment_id);



  const navigate = useNavigate();
  const { id } = useParams();

  

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, `Clients/${id}/ 2024/${apppath}/Capture Data/Data`));
    if (product.exists()) {
      //console.log(product.data())
      setCovid(product.data().covid)
      setNumTimesHadCovid(product.data().numTimesHadCovid)
      setfullyVaccinated(product.data().fullyVaccinated)
      setReasonNotVaccinated(product.data().reasonNotVaccinated)
      
      setCurrentTbTreatment(product.data().currentTbTreatment);
      setStiTreatment(product.data().stiTreatment);
      setNightSweats(product.data().nightSweats);
      setCoughLongerThanTwoWeeks(product.data().coughLongerThanTwoWeeks);
      setWeightLoss(product.data().weightLoss);
      setFeverPersisting(product.data().feverPersisting);
      setBurningPainPassingUrine(product.data().burningPainPassingUrine);
      setDischargeSmells(product.data().dischargeSmells);
      setItchingGenitalsEtc(product.data().itchingGenitalsEtc);
      setUnprotectedSex(product.data().unprotectedSex);
      
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
          </div>          <p className='screening-headings'>Covid-19 : </p>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Have You been diagnosed with Covid-19</label>

                <input
                placeholder={covid}
                onChange={(e) => setCovid(e.target.value)}
              type="text"
              disabled={true}

                  className="appointment-data-field"
                />
          </div>
          <div className={`${covid === "`Yes`" ? 'appointment-data-container' : ' gender-visibility'}`}>
              <label htmlFor="nurse_input" className='appointment-data-label'>How many times</label>

                <input
                placeholder={numTimesHadCovid}
                onChange={(e) => setNumTimesHadCovid(e.target.value)}
              type="text"
              disabled={true}

                  className="appointment-data-field"
                />
          </div>
         
              <div className="appointment-data-container ">
                <label htmlFor="nurse_input" className='appointment-data-label'>Are you fully vaccinated</label>
                  <input
                  placeholder={fullyVaccinated}
                  onChange={(e) => setfullyVaccinated(e.target.value)}
                type="text"
                disabled={true}

                    className="appointment-data-field"
                            />
              
          </div>
          <div  className={`${fullyVaccinated === "No" ? 'appointment-data-container' : ' gender-visibility'}`} >
                <label htmlFor="nurse_input" className='appointment-data-label'>Why are you not</label>
                
                <input
                placeholder={reasonNotVaccinated}
                onChange={(e) => setReasonNotVaccinated(e.target.value)}
                type="text"
                disabled={true}

                  className="appointment-data-field"
                />
              </div>
          <div className="test-kit-container">
          <p className='screening-headings'>TB Questions : </p>

            
          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>Are you currently on Tb treatment </label>

                <input
               placeholder={currentTbTreatment}
               onChange={(e) => setCurrentTbTreatment(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
            </div>
            <div className={`${currentTbTreatment === "No" ? 'appointment-data-container' : ' gender-visibility'}`}>
          <label htmlFor="nurse_input" className='appointment-data-label'>Do you have drenching night sweats </label>

                <input
               placeholder={nightSweats}
               onChange={(e) => setNightSweats(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
            </div>
            <div className={`${currentTbTreatment === "No" ? 'appointment-data-container' : ' gender-visibility'}`}>
          <label htmlFor="nurse_input" className='appointment-data-label'>Cough lasted 2 weeks or more if living HIV positive </label>

                <input
               placeholder={coughLongerThanTwoWeeks}
               onChange={(e) => setCoughLongerThanTwoWeeks(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
          </div>
          <div className={`${currentTbTreatment === "No" ? 'appointment-data-container' : ' gender-visibility'}`}>
          <label htmlFor="nurse_input" className='appointment-data-label'>Unexplained Weight loss of more than 1.5kg </label>

                <input
               placeholder={weightLoss}
               onChange={(e) => setWeightLoss(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
            </div>
            
            <div className={`${currentTbTreatment === "No" ? 'appointment-data-container' : ' gender-visibility'}`}>
          <label htmlFor="nurse_input" className='appointment-data-label'>Persistant fever of more than two weeks</label>

                <input
               placeholder={feverPersisting}
               onChange={(e) => setFeverPersisting(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
          </div>

          </div>
          <div className="test-kit-container">
          <p className='screening-headings'>STI Questions : </p>

            
          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>Are you currently on STI treatment </label>

                <input
               placeholder={stiTreatment}
               onChange={(e) => setStiTreatment(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
            </div>
            <div className={`${stiTreatment === "No" ? 'appointment-data-container' : ' gender-visibility'}`}>
          <label htmlFor="nurse_input" className='appointment-data-label'>Burning/Pain when passing urine </label>

                <input
               placeholder={burningPainPassingUrine}
               onChange={(e) => setBurningPainPassingUrine(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
            </div>
            <div className={`${stiTreatment === "No" ? 'appointment-data-container' : ' gender-visibility'}`}>
          <label htmlFor="nurse_input" className='appointment-data-label'>Discharge Odor </label>

                <input
               placeholder={dischargeSmells}
               onChange={(e) => setDischargeSmells(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
          </div>
          <div className={`${stiTreatment === "No" ? 'appointment-data-container' : ' gender-visibility'}`}>
          <label htmlFor="nurse_input" className='appointment-data-label'>Itching genitals/anus blisters, sores or lumps </label>

                <input
               placeholder={itchingGenitalsEtc}
               onChange={(e) => setItchingGenitalsEtc(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
            </div>
            
            <div className={`${stiTreatment === "No" ? 'appointment-data-container' : ' gender-visibility'}`}>
          <label htmlFor="nurse_input" className='appointment-data-label'>Unprotected sex with more than one sexual partner</label>

                <input
               placeholder={unprotectedSex}
               onChange={(e) => setUnprotectedSex(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
          </div>

          </div>
          
            
            </form>
          
            
          </div>
    </div>  )
}

export default ScreenQuestion