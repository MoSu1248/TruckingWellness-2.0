import React from "react";
import user from "../../../Assets/shared/home__image.png";
import './ActiveUsers.scss'

export default function ActiveUsers() {
  return (
    <div className="dashboard__users">
      <img src={user} alt="" className="dashboard__image"/>
    </div>
  );
}
