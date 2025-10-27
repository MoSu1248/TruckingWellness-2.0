import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { BsChevronLeft } from "react-icons/bs";
import "./patients.css";
import { Link } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import "./patientsSections.css";
import PatientsSectionsBar from "./PatientsSectionsBar";
import PatientTopSection from "./PatientTopSection";
import AppointmentTimeline from "./AppointmentTimeline";
import MedicationSection from "./MedicationSection";
import ReferralsSection from "./ReferralsSection";
import Loading from "../Loading/Loading";
import "./Personal.scss";
import user from "../../Assets/shared/home__image.png";

const Personal = () => {
  const { id } = useParams();
  const today = new Date();
  const year = today.getFullYear();

  const getpatientById = async (id) => {
    const request = await getDoc(doc(db, "Clients", id));
    if (request.exists()) {
    } else {
      console.log("Requset Doesnt Exist");
    }
  };

  const [isloading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  });

  useEffect(() => {
    getpatientById(id);
  }, []);

  return (
    <>
      <div className="client-wrapper personal-wrapper">
        <PatientsSectionsBar props={id} active1={"Yes"} />
        <div className="patient__portfolio-container">
          {isloading === true ? (
            <Loading />
          ) : (
            <>
              <div className="dashboard__users">
                <img src={user} alt="" className="dashboard__image" />
              </div>
              <PatientTopSection path={`Clients/${id}`} />{" "}
              <AppointmentTimeline
                path={`Clients/${id}/ ${year}`}
                passedId={id}
              />
              <MedicationSection
                path={`Clients/${id}/ ${year}`}
                passedId={id}
              />
              <ReferralsSection path={`Clients/${id}/ ${year}`} passedId={id} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Personal;
