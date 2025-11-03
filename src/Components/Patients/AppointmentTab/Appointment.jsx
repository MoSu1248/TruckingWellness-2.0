import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { query, orderBy, collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebaseConfig/firebase";
import Banner from "../../Banner/Banner";
import { Link } from "react-router-dom";
import "../patients.css";
import "../patientsSections.css";
import "../appointments.css";
import PatientsSectionsBar from "../PatientsSectionsBar";
import ReactLoading from "react-loading";
import { FaUserNurse } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import AppointFilter from "../AppointFilter";
import { IoFilter } from "react-icons/io5";
import PopUpBtn from "../../Popups/PopUpBtn";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../../Popups/Modal";

const Personal = (path) => {
  const { id } = useParams();
  let currentYear = new Date().getFullYear();
  const [appointments, setAppointments] = useState([
    { name: "Loading...", id: "initial" },
  ]);
  const [test, settest] = useState();
  const [datePick, setdatePick] = useState(currentYear);
  const [openFilter, setOpenFilter] = useState(false);
  const q = query(
    collection(db, `Clients/${id}/ ${datePick}`),
    orderBy("Appointment_Date", `desc`)
  );
  const [docs, loading, error] = useCollectionData(q);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [appId, setAppId] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  useEffect(() => {
    const result = data.filter((item) => {
      return item.title.toLowerCase().match(search.toLocaleLowerCase());
    });
    setFilter(result);
  }, [search]);

  const today = new Date();
  const [openProfile, setOpenProfile] = useState(false);

  function name(params) {
    setAppId(params);
  }

  return (
    <div className="personal-wrapper">
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={close}
            appointment_id={appId}
          />
        )}
      </AnimatePresence>
      <PatientsSectionsBar props={id} active3={"Yes"} />
      <div className="appointment-topsection-container">
        <div className="medication-header-container">
          <h5 className="general-info-header appointment-timeline-header">
            Appointment History {datePick}
          </h5>
          <form className="search">
            <input
              className="search-input"
              placeholder="Search Appointment ID"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            ></input>
            <div className="filter-container">
              <IoFilter
                className={"refresh-btn appointment-filter-btns"}
                onClick={() => setOpenProfile((prev) => !prev)}
              />
              {openProfile && (
                <div
                  className="flex flex-col dropDownProfile-Appointment"
                  onMouseLeave={() => setOpenProfile((prev) => !prev)}
                >
                  <div className="flex flex-col gap-4">
                    {/* <input type="text" value={data} onChange={(e) => setData(e.target.value)} /> */}
                    <h6 className="filter-header">Filter Year</h6>
                    <button
                      className="filter-btn-styling"
                      value={currentYear}
                      onClick={(e) => setdatePick(e.target.value)}
                    >
                      {" "}
                      {currentYear}
                    </button>
                    <button
                      className="filter-btn-styling"
                      value={currentYear + 1}
                      onClick={(e) => setdatePick(e.target.value)}
                    >
                      {currentYear + 1}
                    </button>
                    <button
                      className="filter-btn-styling"
                      value={currentYear + 2}
                      onClick={(e) => setdatePick(e.target.value)}
                    >
                      {currentYear + 2}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
        <div className="grid-styling">
          {docs
            ?.filter((doc) => {
              return search === "" ? doc : doc.Appointment_ID.includes(search);
            })
            .map((doc) => (
              <motion.button
                className="appointment-details-container"
                onClick={() =>
                  modalOpen ? close() : open() + name(doc.Appointment_ID)
                }
              >
                {loading && "loading"}
                <Link className="appointment-link-styling">
                  <div className="appointment-top-container">
                    <h3 className="client-list-header appointment-date-heading">
                      {doc.Appointment_Date}
                    </h3>
                    <p className="appointment-id-styling">
                      <span>Appointment ID: </span>
                      {doc.Appointment_ID}
                    </p>
                  </div>
                  {/* <li>{doc.test}</li> */}
                  <div className="appointment-bottom-container">
                    <p className="appointment-location-styling">
                      <MdLocationOn className="patients-info-data-icon location-icon appointment-icon-styling" />
                      <span>{doc.Appointment_Location}</span>
                    </p>
                    <div className="appointment-nurse-info-container">
                      <FaUserNurse className="patients-info-data-icon location-icon appointment-icon-styling" />
                      <div className="nurse-name-container">
                        <p className="nurse-info-name">
                          Nurse ID: {doc.Nurse_Id}
                        </p>
                        <p className="nurse-info-name">
                          Nurse Appointed: {doc.Nurse_Name}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Personal;
