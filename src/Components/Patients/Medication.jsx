import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  getDoc,
  updateDoc,
  doc,
  query,
  snapshot,
  orderBy,
  limit,
  collection,
  onSnapshot,
  where,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
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
import "./medication.css";
import { AiOutlineMedicineBox } from "react-icons/ai";
import Pagination from "../EditPatients/Pagination";
import SelectLimit from "../EditPatients/selectLimit";
import { FiExternalLink } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import Modal from "../Popups/Modal";

const Personal = () => {
  const { id } = useParams();
  let currentYear = new Date().getFullYear();

  const [appointments, setAppointments] = useState([
    { name: "Loading...", id: "initial" },
  ]);
  const [search, setSearch] = useState("");
  const [datePick, setdatePick] = useState(currentYear);
  const q = query(
    collection(db, `Clients/${id}/ ${datePick}`),
    orderBy("Appointment_Date", `desc`)
  );
  const [docs, loading, error] = useCollectionData(q);
  const [openProfile, setOpenProfile] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPostIndex = docs?.slice(firstPostIndex, lastPostIndex);
  const [modalOpen, setModalOpen] = useState(false);
  const [appId, setAppId] = useState([]);
  const [tab, setTab] = useState([]);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  function handleclick() {
    if (search === "") {
      setPostPerPage(5);
    } else if (search !== "") {
      setPostPerPage(100);
    }
  }

  function name(params) {
    setAppId(params);
    setTab(8);
  }

  return (
    <div className="personal-wrapper ">
      <PatientsSectionsBar props={id} active2={"Yes"} />
      <>
        <AnimatePresence
          // Disable any initial animations on children that
          // are present when the component is first rendered
          initial={false}
          // Only render one component at a time.
          // The exiting component will finish its exit
          // animation before entering component is rendered
          mode={true}
          // Fires when all exiting nodes have completed animating out
          onExitComplete={() => null}
        >
          {modalOpen && (
            <Modal
              modalOpen={modalOpen}
              handleClose={close}
              appointment_id={appId}
              setTab={tab}
            />
          )}
        </AnimatePresence>

        <div className="client-container med-client-container">
          <div className="medication-header-container">
            <h5 className="general-info-header appointment-timeline-header">
              Medication
            </h5>
            <form className="search">
              <input
                className="search-input"
                placeholder="Search User ID"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                onInput={handleclick}
              ></input>
            </form>

            <SelectLimit onLimitChange={setPostPerPage} />
          </div>
          <div className=" med-table-style-container">
            <table className="table med-table">
              <thead>
                <tr className="clients-table-row-header meds-table-header">
                  <th>Medication</th>
                  <th>Appointment ID</th>
                  <th>Appointment Date</th>
                  <th>Location</th>
                  <th>Coordinator</th>
                </tr>
              </thead>
              <tbody>
                {loading && "loading"}
                {currentPostIndex
                  ?.filter((request) => {
                    return search === ""
                      ? request
                      : request.Appointment_ID.includes(search);
                  })
                  .map((request) => (
                    <tr
                      key={request.Appointment_ID}
                      className={`med-row-styles`}
                      onClick={() => setOpenProfile(request.Appointment_ID)}
                    >
                      <td className="patients-table-data-med med-table-styling">
                        <p
                          className={`${
                            openProfile === request.Appointment_ID
                              ? "unexpanded"
                              : "expanded"
                          }`}
                        >
                          {request.Medication_Administered}
                        </p>
                      </td>
                      <td className="patients-table-data-med">
                        <button
                          className="appointment-link-medication"
                          onClick={() =>
                            modalOpen
                              ? close()
                              : open() + name(request.Appointment_ID)
                          }
                        >
                          {request.Appointment_ID}{" "}
                          <FiExternalLink className="link-icon-styling" />
                        </button>
                      </td>
                      <td className="patients-table-data-med">
                        {request.Appointment_Date}
                      </td>
                      <td className="patients-table-data-med">
                        {request.Appointment_Location}
                      </td>
                      <td className="patients-table-data-med">
                        {request.Nurse_Id}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div>
              <Pagination
                totalPosts={docs?.length}
                postsPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />{" "}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Personal;
