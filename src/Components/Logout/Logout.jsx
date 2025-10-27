import React from "react";
import "./NavIcon.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig/firebase";

const Logout = ({ Icon, title }) => {
  const sign = () => {
    signOut(auth).then(() => {
      console.log("signedOut");
    });
  };
  return (
    <div className="nav-icon " onClick={sign}>
      {Icon && <Icon className="icon" size={25} />}
      <h2 className="title active_class">{title ? title : null}</h2>
    </div>
  );
};

export default Logout;
