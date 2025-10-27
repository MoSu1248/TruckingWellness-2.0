import React, { useState, useEffect, useReducer, prevState } from "react";
import { NavLink } from "react-router-dom";
// import logo from "./twlogo.svg";
// import smallLogo from "./small-logo-tw2.svg";
import logo from "../../Assets/small-logo-tw2.svg";
import { auth } from "../firebaseConfig/firebase";
import { signOut } from "firebase/auth";
import Logout from "../Logout/Logout";
import "./nav.scss";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

// import RequestCounter from "./RequestCounter";
import NavOptions from "./components/NavOptions";

const Nav = () => {
  const sign = () => {
    signOut(auth).then(() => {
      console.log("signedOut");
    });
  };

  const [RequestCount, setRequestCount] = useState(0);
  const [nav, setnav] = useState(true);

  useEffect(() => {
    async function getrequests() {
      const coll = collection(db, "Requests");
      const snapshot = await getCountFromServer(coll);
      setRequestCount(snapshot.data().count);
    }
    getrequests();
  });

  const navLinks = [
    { link: "/", title: "Dashboard" },
    { link: "/patients", title: "Clients" },
    { link: "/AlertedPatients", title: "Alerted Clients" },
    { link: "/requests/inbox", title: "Inbox" },
    { link: "/Nurses", title: "Nurses" },
    { link: "/NewNurses", title: "Register" },
    {
      link: "https://console.firebase.google.com/u/0/project/truckingwellness-714f3/firestore/databases/-default-/data",
      title: "Database",
    },
  ];

  return (
    <header className={`header`}>
      <div className="logo-container">
        <img className="profile-img inner" alt="user-img" src={logo} />
      </div>
      <nav className="nav-container">
        <ul>
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) => {
                  return isActive ? "active  nav-link" : "non-active nav-link";
                }}
              >
                {item.title}
                <div className="active"></div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <NavOptions />
    </header>
  );
};

export default Nav;
