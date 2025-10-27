import React, { useState, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useNavigate, useParams } from "react-router-dom";

// import AddNew from "./AddNew";
import { setDoc, updateDoc, doc, deleteDoc, orderBy, onSnapshot, query, getDoc } from "firebase/firestore";
import { collection, getDocs, limit } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import "./referralsSection.css"

import "./medicationSection.css"
import { Link } from "react-router-dom";
import AppointFilter from "./AppointFilter";
import { VscReferences } from "react-icons/vsc";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { IoChevronForward } from "react-icons/io5";

import { ImCancelCircle } from "react-icons/im";



export default function ReferralsSection({ path , passedId }) {
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
  const myArray = ['', '', '','', '', '','', '', '','', '', ''];


 const navigate = useNavigate();
 const { id } = useParams();

 
 const getProductById = async (id) => {
   const product = await getDoc(doc(db, `Clients/${id}/Referrals/Referral Details`));
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
 },);

 function returnStatus() {
   if (art === "Yes") {
     myArray[0] = <IoIosCheckmarkCircle  className="section-status-img" />;
 
   } else {
     myArray[0] = <ImCancelCircle  className="section-status-img-cross" />;
   }
 
   if (preArt === "Yes") {
     myArray[1] = <IoIosCheckmarkCircle  className="section-status-img" />;
 
   } else {
     myArray[1] = <ImCancelCircle  className="section-status-img-cross" />;
   }
   if (antenatalCare === "Yes") {
     myArray[2] = <IoIosCheckmarkCircle  className="section-status-img" />;
 
   } else {
     myArray[2] = <ImCancelCircle  className="section-status-img-cross" />;
   }
 
   if (elisa === "Yes") {
     myArray[3] = <IoIosCheckmarkCircle  className="section-status-img" />;
 
   } else {
     myArray[3] = <ImCancelCircle  className="section-status-img-cross" />;
   }
   if (familyPlanning === "Yes") {
     myArray[4] = <IoIosCheckmarkCircle  className="section-status-img" />;
 
   } else {
     myArray[4] = <ImCancelCircle  className="section-status-img-cross" />;
   }
 
   if (genderBasedViolence === "Yes") {
     myArray[5] = <IoIosCheckmarkCircle  className="section-status-img" />;
 
   } else {
     myArray[5] = <ImCancelCircle  className="section-status-img-cross" />;
   }
   if (ncdsTreatmentSupport === "Yes") {
     myArray[6] = <IoIosCheckmarkCircle  className="section-status-img" />;
 
   } else {
     myArray[6] = <ImCancelCircle  className="section-status-img-cross" />;
   }
 
   if (pmtct === "Yes") {
     myArray[7] = <IoIosCheckmarkCircle  className="section-status-img" />;
 
   } else {
     myArray[7] = <ImCancelCircle  className="section-status-img-cross" />;
   }
   if (socialService === "Yes") {
     myArray[8] = <IoIosCheckmarkCircle  className="section-status-img" />;
 
   } else {
     myArray[8] = <ImCancelCircle  className="section-status-img-cross" />;
   }
 
   if (stiTest === "Yes") {
     myArray[9] = <IoIosCheckmarkCircle  className="section-status-img" />;
 
   } else {
     myArray[9] = <ImCancelCircle className="section-status-img-cross" />;
   }
   if (voluntaryMaleMedicalCircumcision === "Yes") {
     myArray[10] = <IoIosCheckmarkCircle  className="section-status-img" />;
 
   } else {
     myArray[10] = <ImCancelCircle  className="section-status-img-cross" />;
   }
 
   if (tBTest === "Yes") {
     myArray[11] = <IoIosCheckmarkCircle  className="section-status-img" />;
 
   } else {
     myArray[11] = <ImCancelCircle  className="section-status-img-cross" />;
   }
 }

 returnStatus()
  

  return (
    <div className="section-ref-top-wrapper">
          <div className="medication-header-container">
        <h5 className="general-info-header appointment-timeline-header">Referrals</h5>
        <Link to={`/patients/Referrals/${id}`}>
        <button className="patients-appointment-view-btn viewbtn"><IoChevronForward className="chev-styling" /></button>
              </Link>
      </div>
      <div className="section-referral-table-container">
        <table className="status-table-styling ">
            <tbody className="section-status-table">
                <tr className="section-status-row">
                    <td className="section-status-data-styling" ><p>Antenatal Care</p>{myArray[2]}</td>
                    <td className="section-status-data-styling" ><p>Art</p>{myArray[0]}</td>
                </tr>
                <tr className="status-row">
                     <td className="section-status-data-styling" > <p>PreArt</p>{myArray[1]} </td>
                      <td className="section-status-data-styling" > <p>Elisa</p>{myArray[3]} </td>
                </tr>
                <tr className="status-row">
                      <td className="section-status-data-styling" > <p>Family Planning</p>{myArray[4]}</td>
                     <td className="section-status-data-styling" > <p>Gender Based Violence</p>{myArray[5]}
                </td>
                 </tr>
                <tr className="status-row">
                      <td className="section-status-data-styling" ><p>NCDS</p>{myArray[6]}</td>
                     <td className="section-status-data-styling" > <p>PMTCT</p>{myArray[7]}</td>
        
                  </tr>
                  <tr className="status-row">
                     <td className="section-status-data-styling" > <p>Social Services</p> {myArray[8]}</td>
                     <td className="section-status-data-styling" > <p>STI</p>{myArray[9]}</td>
                  </tr>
                  <tr className="status-row">
                     <td className="section-status-data-styling" ><p>VMMC</p>{myArray[10]}</td>
                      <td className="section-status-data-styling" > <p>TB</p>{myArray[11]}</td>
                  </tr>
             </tbody>
         </table>
      </div>
      
    </div>
  );
}
