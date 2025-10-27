import React, { useState, useEffect, useReducer } from "react";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import "../Edit.css"
import "../Edit2.css"
const HIVTest = (appointment_id) => {

 
  const [firstHivTest, setFirstHivTest] = useState("");
  const [lastTestedLocation, setLastTestedLocation] = useState("");
  const [lastTestResult, setLastTestResult] = useState("");
  const [lastTested, setLastTested] = useState("");
  const [otherReasonsTesting, setOtherReasonsTesting] = useState("");
  const [firstTestKitExpirationDate, setFirstTestKitExpirationDate] = useState("");
  const [firstTestKitName, setFirstTestKitName] = useState("");
  const [firstTestKitNumber, setFirstTestKitNumber] = useState("");
  const [firstTestResult, setFirstTestResult] = useState("");
  const [confirmationTestKitExpirationDate, setConfirmationTestKitExpirationDate] = useState("");
  const [confirmationTestKitName, setConfirmationTestKitName] = useState("");
  const [confirmationTestKitNumber, setConfirmationTestKitNumber] = useState("");
  const [confirmationTestResult, setConfirmationTestResult] = useState("");
  const [reducerValue, forceUpdate] = useReducer(x => x+1 ,0)
  const [apppath, setAppPath] = useState(appointment_id.appointment_id);

  const navigate = useNavigate();
  const { id } = useParams();

  function refresh(ignored) {
    forceUpdate(ignored);
  }

  const update = async (e) => {
    e.preventDefault();
    const patient = doc(db, `Clients/${id}/ 2024/${apppath}/Capture Data/Data`);
    const data = {
      firstHivTest: firstHivTest,
      lastTestedLocation:lastTestedLocation,
      lastTestResult: lastTestResult,
      lastTested:lastTested,
      otherReasonsTesting:otherReasonsTesting,
    
      
    };
    await updateDoc(patient, data);
    if ((e = true)) {
      Swal.fire({
        confirmButtonColor: "#C1151B ",
        title: "Patient Record Updated",
        text: "",
        icon: "success",
      });
      refresh()
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
      setFirstHivTest(product.data().firstHivTest)
      setLastTestedLocation(product.data().lastTestedLocation)
      setLastTestResult(product.data().lastTestResult)
      setLastTested(product.data().lastTested)
      setOtherReasonsTesting(product.data().otherReasonsTesting)
      setFirstTestKitExpirationDate(product.data().firstTestKitExpirationDate)
      setFirstTestKitName(product.data().firstTestKitName)
      setFirstTestKitNumber(product.data().firstTestKitNumber)
      setFirstTestResult(product.data().firstTestResult)
      setConfirmationTestKitExpirationDate(product.data().confirmationTestKitExpirationDate)
      setConfirmationTestKitName(product.data().confirmationTestKitName)
      setConfirmationTestKitNumber(product.data().confirmationTestKitNumber)
      setConfirmationTestResult(product.data().confirmationTestResult)
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
          <label htmlFor="nurse_input" className='appointment-data-label'>First HIV Test: </label>

                <input
               placeholder={firstHivTest}
               onChange={(e) => setFirstHivTest(e.target.value)}
                 type="text"
                 className="appointment-data-field"
                         />
              
          </div>
        
            <div className="appointment-data-container appointment-row-styling">
              <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Last Test Location</label>
                  <input
                  placeholder={lastTestedLocation}
                  onChange={(e) => setLastTestedLocation(e.target.value)}
                    type="text"
                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Last HIV Result</label>
                
                <input
                placeholder={lastTestResult}
                onChange={(e) => setLastTestResult(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
            </div>
            <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Last Time Tested</label>
                
                <input
                placeholder={lastTested}
                onChange={(e) => setLastTested(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
              </div>
          </div>   
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Test Reasoning</label>

                <input
                placeholder={otherReasonsTesting}
                onChange={(e) => setOtherReasonsTesting(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>

          <div className="test-kit-container">
          <p className='hiv-heading'>Initial HIV Test Results : </p>

            
          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>First Test Exp Date </label>

                <input
               placeholder={firstTestKitExpirationDate}
               onChange={(e) => setFirstTestKitExpirationDate(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
            </div>
            <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>First Test Kit Name: </label>

                <input
               placeholder={firstTestKitName}
               onChange={(e) => setFirstTestKitName(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
            </div>
            <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>First Test Kit Number: </label>

                <input
               placeholder={firstTestKitNumber}
               onChange={(e) => setFirstTestKitNumber(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
          </div>
          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>First Test Kit Result: </label>

                <input
               placeholder={firstTestResult}
               onChange={(e) => setFirstTestResult(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
          </div>

          </div>
          
          <div  className={`${firstTestResult === "Reactive" ? '' : 'test-kit-container gender-visibility'}`}>
          <p className='hiv-heading'>Confirmation HIV Test Results : </p>

            
          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>Confirmation Test Exp Date </label>

                <input
               placeholder={confirmationTestKitExpirationDate}
               onChange={(e) => setConfirmationTestKitExpirationDate(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
            </div>
            <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>Confirmation Test Kit Name: </label>

                <input
               placeholder={confirmationTestKitName}
               onChange={(e) => setConfirmationTestKitName(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
            </div>
            <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>Confirmation Test Kit Number: </label>

                <input
               placeholder={confirmationTestKitNumber}
               onChange={(e) => setConfirmationTestKitNumber(e.target.value)}
                 type="text"                disabled={true}

                 className="appointment-data-field"
                         />
              
          </div>
          <div className="appointment-data-container">
          <label htmlFor="nurse_input" className='appointment-data-label'>Confirmation Test Kit Result: </label>

                <input
               placeholder={confirmationTestResult}
               onChange={(e) => setConfirmationTestResult(e.target.value)}
                 type="text"                disabled={true}

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

export default HIVTest