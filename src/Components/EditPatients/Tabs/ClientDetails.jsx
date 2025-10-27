import React from 'react'
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import "../Edit.css"
import "../Edit2.css"
const ClientDetails = (appointment_id) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [nationality, setNationality] = useState("");
  const [name, setname] = useState("");
  const [surname, setSurname] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [additionalCellNumber, setAdditionalCellNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [gender, setGender] = useState("");
  const [industry_Member, setIndustry_Member] = useState("");
  const [industryNumber, setIndustryNumber] = useState("");
  const [keyPopulationType, setKeyPopulationType] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [relationshipStatus, setRelationshipStatus] = useState("");
  const [apppath, setAppPath] = useState(appointment_id.appointment_id);
  const [testpath, settestPath] = useState(`Clients/${id}/ 2024/${apppath}/Capture Data/Data`);

  const update = async (e) => {
    e.preventDefault();
    const patient = doc(db, testpath);
    const data = {
      idType: idType,
      idNumber: idNumber,
      nationality:nationality,
      Name: name,
      Surname:surname,
      cellNumber: cellNumber,
      additionalCellNumber: additionalCellNumber,
      dateOfBirth: dateOfBirth,
      companyName: companyName,
      gender: gender,
      industry_Member: industry_Member,
      industryNumber: industryNumber,
      relationshipStatus: relationshipStatus,
      ethnicity: ethnicity,
      keyPopulationType:keyPopulationType,
      
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
    const product = await getDoc(doc(db, testpath));
    if (product.exists()) {
      //console.log(product.data())
      setIdType(product.data().idType)
      setIdNumber(product.data().clientID)
      setNationality(product.data().nationality)
      setname(product.data().Name)
      setSurname(product.data().Surname)
      setCellNumber(product.data().cellNumber)
      setAdditionalCellNumber(product.data().additionalCellNumber)
      setDateOfBirth(product.data().dateOfBirth)
      setCompanyName(product.data().companyName)
      setGender(product.data().gender)
      setIndustry_Member(product.data().industry_Member)
      setIndustryNumber(product.data().industryNumber)
      setRelationshipStatus(product.data().relationshipStatus)
      setKeyPopulationType(product.data().keyPopulationType)
      setEthnicity(product.data().ethnicity)
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
            
            <form  onSubmit={update}>
          <div className='appointment-edit-header'>
            <p className='top-text'>View and Edit Patient Records : </p>
            <div className='edit-appointment-info-container'>
            <p className='appointment-client-info'>Appointment ID : {apppath}</p>
            <p className='appointment-client-info'>Client ID : {id} </p>
          </div>
          </div>
          <div className="appointment-data-container appointment-row-styling">
              <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>ID Type</label>
                  <input
                  placeholder={idType}
                  onChange={(e) => setIdType(e.target.value)}
                    type="text"
                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Nationality</label>
                
                <input
                placeholder={nationality}
                onChange={(e) => setNationality(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
            </div>
            
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>ID Number</label>

                <input
                placeholder={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
            <div className="appointment-data-container appointment-row-styling">
              <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>First Name</label>
                  <input
                  placeholder={name}
                  onChange={(e) => setname(e.target.value)}
                    type="text"
                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Surname</label>
                
                <input
                placeholder={surname}
                onChange={(e) => setSurname(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
              </div>
          </div>
              <div className="appointment-data-container appointment-row-styling">
              <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Cellphone Number</label>
                  <input
                  placeholder={cellNumber}
                  onChange={(e) => setCellNumber(e.target.value)}
                    type="text"
                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Additional Cell Number</label>
                
                <input
                placeholder={additionalCellNumber}
                onChange={(e) => setAdditionalCellNumber(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
              </div>
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Date Of Birth</label>

                <input
                placeholder={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Client Company Name</label>

                <input
                placeholder={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
          
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Gender</label>

                <input
                placeholder={gender}
                onChange={(e) => setGender(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
          </div>
   <div className="appointment-data-container appointment-row-styling">
              <div className='fill-width'> 
                <label htmlFor="nurse_input" className='appointment-data-label'>Industry Member</label>
                  <input
                  placeholder={industry_Member}
                  onChange={(e) => setIndustry_Member(e.target.value)}
                    type="text"
                    className="appointment-data-field"
                            />
              </div>
              <div className='fill-width'>
                <label htmlFor="nurse_input" className='appointment-data-label'>Industry Member Number</label>
                
                <input
                placeholder={industryNumber}
                onChange={(e) => setIndustryNumber(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
            </div>
          </div>
          <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Key Population</label>

                <input
                placeholder={keyPopulationType}
                onChange={(e) => setKeyPopulationType(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
            </div>
            <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Ethnicity</label>

                <input
                placeholder={ethnicity}
                onChange={(e) => setEthnicity(e.target.value)}
                  type="text"
                  className="appointment-data-field"
                />
            </div>
            <div className="appointment-data-container">
              <label htmlFor="nurse_input" className='appointment-data-label'>Relationship Status</label>

                <input
                placeholder={relationshipStatus}
                onChange={(e) => setRelationshipStatus(e.target.value)}
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
          
            
        </div>
  );
}

export default ClientDetails