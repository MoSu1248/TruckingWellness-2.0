import React from "react";
import "./NavOptions.scss";
import Settings from "./Settings";
import User from "./User";
import Notifications from "./Notifications";


export default function NavOptions() {
  return (
    <div className="nav__options">
      <Settings />
      <Notifications />
      <User />
      {/* {openProfile3 && (
        <div
          className=" dash-dropDown_notification"
        >
          <div className="banner-dropwdown-btn-container" onClick={sign}>
            <p className="banner-signout-styling ">Signout</p>
          </div>
        </div>
      )} */}
      {/* <div className="banner-btn-container">
        <div>
          <Dark />
        </div>
      </div> */}
    </div>
  );
}
