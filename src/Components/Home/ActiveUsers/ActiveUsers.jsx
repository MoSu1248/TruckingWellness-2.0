import React from "react";
import user from "../../../Assets/shared/nurse_img.png";
import "./ActiveUsers.scss";

export default function ActiveUsers() {
  return (
    <div className="dashboard__users">
      <img src={user} alt="" className="dashboard__image" />
      <div className="dashboard__image-text">
        <p>Lisa Piterson</p>
      </div>
    </div>
  );
}
