import React, { useState, useReducer } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig/firebase";
import { Route, Routes, useNavigate } from "react-router-dom";
import Nurses from "../Nurses/Nurses";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { MdGroupAdd } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./newnurse.css";

const MySwal = withReactContent(Swal);

const Newnurse = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");

  const [NurseID, setNurseID] = useState("");
  const [status, setStatus] = useState("Offline");
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const Register = (e) => {
    // e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error);
      Swal.fire({
        buttonsStyling: true,
        icon: "error",
        title: "Error",
        text: "Account with this email already exists",
      });
    });
  };
  const store = async () => {
    const docRef = doc(db, "Nurses", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      Swal.fire({
        buttonsStyling: true,
        icon: "error",
        title: "Error",
        text: "Account with this email already exists",
      });
    } else {
      Swal.fire({
        buttonsStyling: true,
        confirmButtonColor: "#C1151B ",
        title: "Client Profile Created",
        text: "",
        icon: "success",
      });
      await setDoc(doc(db, "Nurses", email), {
        Name: Name,
        Surname: Surname,
        NurseID: NurseID,
        Email: email,
        Status: status,
      });
    }
  };

  const submit = (e) => {
    if ((email === "") | (Surname === "") | (NurseID === "") | (Name === "")) {
      Swal.fire({
        buttonsStyling: true,
        icon: "error",
        title: "Error",
        text: "Please Fill In All Account Details",
      });
    } else {
      store();
      Register();

      setEmail("");
      setSurname("");
      setNurseID("");
      setStatus("");
      setName("");
      setPassword("");
      setPasswordType("password");
    }
  };

  return (
    <>
      <div className="wrapper newnurse-wrapper">
        <div className="register-container">
          <div className="data-collection-container">
            <form className="nurse_info_form_container">
              <div className="heading-icon-main-pages">
                <h4 className="register-heading signup-heading">
                  Coordinator Registration Form
                </h4>
              </div>
              <p>
                Please fill in all required fields to complete user registration
                :
              </p>
              <div className="data-input">
                <h6>Personal details:</h6>
                <label htmlFor="nurse_input">First Name</label>
                <input
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="email-field nurse_input"
                />
              </div>
              <div className="data-input">
                <label htmlFor="nurse_input">Last Name </label>

                <input
                  value={Surname}
                  onChange={(e) => setSurname(e.target.value)}
                  type="text"
                  className="email-field nurse_input"
                />
              </div>
              <p></p>

              <div className=" data-input">
                <h6 htmlFor="nurse_input">Provide the Coordinator ID:</h6>

                <label htmlFor="nurse_input nurse-id-label">
                  Coordinator ID{" "}
                  <span
                    className="data-info tooltip-toggle"
                    aria-label="Please provide the alloacted ID given to the user by the organisation."
                  >
                    *
                  </span>
                </label>

                <input
                  value={NurseID}
                  onChange={(e) => setNurseID(e.target.value)}
                  type="text"
                  className="email-field nurse_input"
                />
              </div>
            </form>
            <form className="register-form">
              <div className="email-container">
                <h6 htmlFor="nurse_input">Enter Login Details: </h6>

                <div className="email-container data-input">
                  <label htmlFor="nurse_input">
                    Email{" "}
                    <span
                      className="data-info tooltip-toggle"
                      aria-label="Please enter a valid email address. This will be used for account reset and verification purposes."
                    >
                      *
                    </span>
                  </label>
                  <input
                    value={email}
                    className="email-field nurse_input"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                  />
                </div>
              </div>
              <div className="password-container data-input">
                <label htmlFor="nurse_input">
                  Password{" "}
                  <span
                    className="data-info tooltip-toggle"
                    aria-label="Create a strong password with a mix of letters, numbers, and symbols to enhance security."
                  >
                    *
                  </span>
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={passwordType}
                  id="password"
                  className="password-field nurse_input"
                />
                <label className="showPassword-label">
                  <input
                    type="checkbox"
                    className="box-label"
                    onClick={togglePassword}
                  />
                  Show Password
                </label>
              </div>
            </form>
            <div class="btn-signup ">
              <button
                className="css-1f1mtmi"
                onClick={() => {
                  submit();
                }}
              >
                Register User
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newnurse;
