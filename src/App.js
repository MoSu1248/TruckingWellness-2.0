import "./App.css";
import Nav from "./Components/Navigation/Nav";
import Patients from "./Components/Patients/Patients";
import AlertedPatients from "./Components/AlertedPatients/AlertedPatients";
import Home from "./Components/Home/Home";
import Requests from "./Components/Requests/Requests";
import Nurses from "./Components/Nurses/Nurses";
import Newnurse from "./Components/NewNurses/Newnurse";
import { HashRouter, Route, Switch, Routes, Redirect, BrowserRouter } from 'react-router-dom';
import Edit from "./Components/EditPatients/Edit";
import Nurse from "./Components/Nurses/Nurse";
import Show from "./Components/EditPatients/Show";
import Login from "./Components/Login/Login";
import { useEffect, useState } from "react";
import { onAuthStateChanged, setPersistence , getAuth } from "firebase/auth";
import { auth } from "./Components/firebaseConfig/firebase";
import Success from "./Components/Nurses/Success";
import Personal from "./Components/Patients/Personal";
import Medication from "./Components/Patients/Medication";
import Notes from "./Components/Patients/Referrals";
import Appointment from "./Components/Patients/AppointmentTab/Appointment";
import Search from "./Components/EditPatients/Search";
import RequestsDelete from "./Components/Requests/RequestsDeleted";
import Loading from './Components/Loading/Loading.jsx';
import Dark from "./Components/DarkMode/Dark.js";

function App() {

  const [LoggedIn, setLoggedIn] = useState(true);
  const [isloading, setisLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setisLoading(false)
      }, 1500);
    
    })

    useEffect(() => {
      
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      });
    }, []);

  return (
    <div className="App">
      {/* {LoggedIn ? ( */}
        <>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={isloading === true? <Loading /> : (<Home />)} />
              <Route path="/Patients" element={(<Patients />)} />
              <Route path="/AlertedPatients" element={<AlertedPatients />} />
              <Route path="/Patients/personal/:id" element={<Personal />} />
              <Route path="/requests/inbox" element={<Requests />} />
              <Route path="/requests/deleted" element={<RequestsDelete />} />
              <Route path="/Nurses" element={<Nurses />} />
              <Route path="/NewNurses" element={<Newnurse />} />
              <Route path="/edit/:id/:appointment_id" element={<Edit />} />
              <Route path="/Nurses/Nurse/:id" element={<Nurse />} />
              <Route path="/patients/medication/:id" element={<Medication />} />
              <Route path="/patients/Referrals/:id" element={<Notes />} />
              <Route path="/patients/appointment/:id" element={<Appointment />} />
              <Route path="/Success" element={<Success />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </BrowserRouter>
        </>
      {/* ) : (
        <Login />
      )} */}
    </div>
  );
}

export default App;
