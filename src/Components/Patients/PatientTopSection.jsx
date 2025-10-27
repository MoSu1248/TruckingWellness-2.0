import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OtherLogo from "../Resources/other_img.png";
import FemaleLogo from "../images/woman.png";
import maleLogo from "../Resources/man.png";
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoCalendarClear } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { TiFlag } from "react-icons/ti";
import "./PatientsTopSection.scss";

const PatientTopSection = ({ path }) => {
  const { id } = useParams();
  const [Cell, setCell] = useState("");
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [birth, setBirth] = useState("");
  const [flagged, setFlagged] = useState("");
  const [flaggedReason, setFlaggedReason] = useState("");

  const [gender, setGender] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [industryMember, setindustry_Member] = useState("");
  const [nationality, setnationality] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [industryNumber, setindustryNumber] = useState("");
  const [lastAppointmentlocation, setlastAppointmentlocation] = useState("");

  const [HIV, setHIV] = useState("");

  const [addpath, setAddPath] = useState("");
  const [genderIcon, setGenderIcon] = useState("");

  const getpatientById = async () => {
    const request = await getDoc(doc(db, `${path}`));
    if (request.exists()) {
      setName(request.data().Name);
      setAddPath(request.data().clientID);
      setLname(request.data().Surname);
      setCell(request.data().cellNumber);
      setBirth(request.data().dateOfBirth);
      setGender(request.data().gender);
      setindustry_Member(request.data().industry_Member);
      setHIV(request.data().HIV);
      // setClientId(request.data().clientId)
      setEthnicity(request.data().ethnicity);
      setlastAppointmentlocation(request.data().lastAppointmentlocation);
      setnationality(request.data().nationality);
      setindustryNumber(request.data().industryNumber);
      setFlagged(request.data().Flagged);
      setFlaggedReason(request.data().flagReason);

      //   setAddCellNumber(request.data().additionalCellNumber);
    } else {
      console.log("Requset Doesnt Exist");
    }
  };

  useEffect(() => {
    getpatientById();

    const changeName = () => {
      if (gender === "Male") {
        setGenderIcon(maleLogo);
      } else if (gender === "Female") {
        setGenderIcon(FemaleLogo);
      } else setGenderIcon(OtherLogo);
    };
    if (industryMember !== "Yes") {
      setindustryNumber("--");
    }

    changeName();
  });

  return (
    <div className="patients-info">
      <div className="patients-info-header-container">
        <h4>
          {name} {lname}
        </h4>
        <span
          className="data-info-patient tooltip-toggle-patients-info"
          aria-label={"Cell Number : " + Cell}
        >
          <MdLocalPhone className="patients-phone-icon" />
        </span>
        <span
          className="data-info-patient tooltip-toggle-patients-info"
          aria-label={flaggedReason}
        >
          <TiFlag
            className={`${
              flagged === "Yes"
                ? "patients-flag-icon"
                : " patients-flag-icon-hidden"
            }`}
          />
        </span>
      </div>
      <div className="patients-info-data">
        <div className="patient-info-container">
          <span
            className="data-info-patient tooltip-toggle-patients-info-location"
            aria-label="ID Number"
          >
            <HiIdentification className="patients-info-data-icon patient-id-icon" />
          </span>
          <p>{addpath}</p>
        </div>
        <div className="patient-info-container">
          <FaUser className="patients-info-data-icon" />
          <p>{gender}</p>
        </div>
        <div className="patient-info-container">
          <span
            className="data-info-patient tooltip-toggle-patients-info-location"
            aria-label="Last Location"
          >
            <MdLocationOn className="patients-info-data-icon location-icon" />
          </span>
          <p>{lastAppointmentlocation}</p>
        </div>
        <div className="patient-info-container">
          <span
            className="data-info-patient tooltip-toggle-patients-info-location"
            aria-label="Date Of Birth"
          >
            <IoCalendarClear className="patients-info-data-icon" />
          </span>
          <p>{birth}</p>
        </div>
      </div>
      <div className="patients-bottom-header-container">
        <div className="patients-medic-info-profile">
          <p className="medic-info-data">{nationality}</p>
          <p className="patients-data-type">Nationality</p>
        </div>
        <div className="patients-medic-info-profile">
          <p className="medic-info-data">{HIV}</p>
          <p className="patients-data-type">HIV Status</p>
        </div>
        <div className="patients-medic-info-profile">
          <p className="medic-info-data ethnicity-styling">{ethnicity}</p>
          <p className="patients-data-type">Ethnicity</p>
        </div>
        {/* <div className='patients-medic-info-profile'><p className='medic-info-data'>{flagged}</p><p className='patients-data-type' >Flagged</p></div> */}
        <div className="patients-medic-info-profile">
          <p className="medic-info-data">{industryMember}</p>
          <p className="patients-data-type">Industry Member</p>
        </div>
        <div className="patients-medic-info-profile bloodPressure-container">
          <p className="medic-info-data">{industryNumber}</p>
          <p className="patients-data-type">Industry Number</p>
        </div>
      </div>
    </div>
  );
};

export default PatientTopSection;
