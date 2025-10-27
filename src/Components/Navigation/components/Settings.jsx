import React from "react";
import settings from "../../../Assets/shared/settings.svg";

export default function Settings() {
  return (
    <div className="options-styling settings-styling">
      <img src={settings} alt="" />
      <p>Settings</p>
    </div>
  );
}
