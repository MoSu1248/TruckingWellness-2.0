import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { doc, setDoc } from "firebase/firestore"; 
import "../NewNurses/newnurse.css";

const Create = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Surname, setSurname] = useState("");
  const [NurseID, setNurseID] = useState("");
  const [status, setStatus] = useState("Offline");
  const navigate = useNavigate();

  const patientsCollection = collection(db, "Nurses");

  const store = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "Nurses", Email), {
      Name: Name,
      Surname: Surname,
      NurseID: NurseID,
      Email: Email,
      Status:status
      
    });
    navigate("/Newnurse");
  };

  return (
    <div className="register-container">
      <div className="row">
        <div className="col">
          <h2>Nurse Information</h2>
          <form  className= "nurse_info_form_container" onSubmit={store}>
          <div className="mb-3">
              <input
                value={Email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="email-field nurse_input"
              />
            </div>
            <div className="mb-3">
              <input
                 placeholder="First Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="email-field nurse_input"
              />
            </div>
            <div className="mb-3">
              <input
                 placeholder="Surname"
                value={Surname}
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                className="email-field nurse_input"
              />
            </div>
            <div className="mb-3">
              <input
                placeholder="Nurse ID"
                value={NurseID}
                onChange={(e) => setNurseID(e.target.value)}
                type="number"
                className="email-field nurse_input"
              />
            </div>
            <div class="btn-wrapper new-nurse-wrapper create_wrapper">
              <div class="link_wrapper">
                <button className="submit-btn" type="submit">
                  Submit
                </button>
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 268.832 268.832"
                  >
                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                  </svg>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
