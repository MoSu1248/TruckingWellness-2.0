import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getDoc, doc, query, getCountFromServer } from "firebase/firestore";

import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ChildrenList from "./ChildrenList";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import MiniCalendar from "./calendar/MiniCalendar";
import "./nurse.css";
import NurseRequests from "./NurseRequests";
import { ChevronFirst } from "lucide-react";
import { IoCalendar } from "react-icons/io5";
import RecentPatients from "./RecentPatients";
import { IoMdClose } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import female from "../images/woman.png";
import EditClientModalBtn from "../Popups/EditClient/EditClientModalBtn";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import NurseUserCounter from "./Counters/NurseUserCounter";
import DailyCounter from "./Counters/DailyCounter";
import DailyClientCounter from "./Counters/DailyClientCounter";

const MySwal = withReactContent(Swal);
const Request = () => {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const [art, setart] = useState("");
  const [employee_ID, setID] = useState("");
  const [name, setName] = useState("");
  const [Sname, setSname] = useState("");
  const [request, setRequest] = useState("");
  const [status, setStatus] = useState("");
  const [lastLogin, setLastLogin] = useState("");
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();
  const [appId, setAppId] = useState([]);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  function names(params) {
    setAppId(params);
  }

  const [calenderState, setCalenderState] = useState(false);

  const getpatientById = async (id) => {
    const request = await getDoc(doc(db, "Nurses", id));
    if (request.exists()) {
      //console.log(patient.data())
      setart(request.data().id);
      setID(request.data().NurseID);
      setName(request.data().Name);
      setSname(request.data().Surname);
      setRequest(request.data().test);
      setSubject(request.data().Subject);
      setLastLogin(request.data().lastLogin);
      setStatus(request.data().Status);
    } else {
      console.log("Requset Doesnt Exist");
    }
  };

  const dateOptions = {
    header: { weekday: "short" },
    footer: { month: "short" },
    value: { day: "2-digit" },
    locale: "En",
  };

  useEffect(() => {
    getpatientById(id);
  });

  function resetPassword() {
    const auth = getAuth();
    sendPasswordResetEmail(auth, id)
      .then(() => {
        Swal.fire({
          buttonsStyling: true,
          confirmButtonColor: "#C1151B ",
          title: "Password Reset Email Sent!",
          text: "",
          icon: "success",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <>
      <div className="wrapper">

        <div className="nurse-wrapper">
          <div className="first-container">
            <Link to="/Nurses" className="back-btn-styling">
              <button className="back-btn ">
                <ChevronFirst />
                <span>Back</span>
              </button>
            </Link>
            <div className="nurse-profile-container">
              <span class="chakra-avatar css-1xth1es">
                <img src={female} alt="test" className="user-img" />
              </span>
              <div className="patient-info-top-container">
                <p className="patient-username">
                  {name} {Sname}
                </p>
                <p
                  className={`${
                    status === "Offline"
                      ? "chakra-text css-hnifhv"
                      : "chakra-text css-hnifhv css-hnifhv-online"
                  }`}
                >
                  {status}
                </p>
              </div>

              <div className="nurse-details-container">
                <div className="nurse-details-info-styling">
                  <FaRegUser className="clients-icon" />
                  <div className="nurse-details-container-styling">
                    <p className="nurse-header-styling">User ID</p>
                    <h5 className="nurse-data-styling">{employee_ID}</h5>
                  </div>
                </div>
                <div className="nurse-details-info-styling">
                  <MdOutlineEmail className="clients-icon" />
                  <div>
                    <p className="nurse-header-styling">Email Address</p>
                    <h5 className="nurse-data-styling">{id}</h5>
                  </div>
                </div>
                <div className="nurse-details-info-styling">
                  <MdHistory className="clients-icon" />

                  <div>
                    <p className="nurse-header-styling">Last Seen</p>
                    <h5 className="nurse-data-styling">{lastLogin}</h5>
                  </div>
                </div>
              </div>
              <button className="edit-btn" onClick={resetPassword}>
                Reset Password
              </button>
              {/* <EditClientModalBtn  /> */}
            </div>
          </div>
          <div className="profiile-data-container">
            <div className="counter-container">
            <DailyCounter
                path={`Nurses/${id}/Login / ${moment(dateState).format(
                  "Y"
                )}/${moment(dateState).format("MMMM")}/${moment(
                  dateState
                ).format("D")}/LoginTimes`}
              />
           
              <DailyClientCounter day={`${moment(dateState).format("D")}`} test={employee_ID} month={`${moment(dateState).format("MMMM")}`} />
              <NurseUserCounter month={`${moment(dateState).format("MMMM")}`} test={employee_ID}  />

            </div>

            <div className="nurse-lower-wrapper">
              <RecentPatients path={employee_ID} />
              <NurseRequests
                test={`Requests`}
                get={employee_ID}
                nurse_id={employee_ID}
              />
            </div>
            <div className="login_container">
              <div className="login-info-top-container">
                <div className="heading-icon-main-pages">
                  <MdHistory className="icon-styling" />
                  <h4 className=" user-login-heading">User Login History</h4>
                </div>
                <IoCalendar
                  className="calender-btn"
                  onClick={() => {
                    setCalenderState((prevState) => !prevState);
                  }}
                />
              </div>
              <ChildrenList
                path={`Nurses/${id}/Login / ${moment(dateState).format(
                  "Y"
                )}/${moment(dateState).format("MMMM")}/${moment(
                  dateState
                ).format("D")}/LoginTimes`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`calender-panel ${calenderState && "visable"}`}>
        <div className="date-selection-top-container">
          <h4 className="general-info-header date-selection-header">
            Date Selection{" "}
          </h4>
          <IoMdClose
            className="close-btn"
            onClick={() => {
              setCalenderState((prevState) => !prevState);
            }}
          />
        </div>
        <div className="calender-container ">
          <>
            <div className="">
              <div className="">
                <Calendar
                  className="react-calendar"
                  value={dateState}
                  onChange={changeDate}
                  onClickMonth={changeDate}
                />
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Request;
