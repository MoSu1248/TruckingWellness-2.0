import { useCollectionData } from "react-firebase-hooks/firestore";
import { setDoc, updateDoc, doc, deleteDoc, orderBy } from "firebase/firestore";
import { collection, limit } from "firebase/firestore";
import { collectionGroup, query, where, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";

import { db } from "../../firebaseConfig/firebase";
import Folder from "../../Resources/folder.png";
import { FaUserAlt } from "react-icons/fa";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import "./testCharts.css";
import AppointFilter from "../Filter/DashFilter";

export default function PieChartWithCustomizedLabel() {
  const [colGroup, setColGroup] = useState();
  const [field, setField] = useState();
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const [dataFromChild, setDataFromChild] = useState(month);
  let currentYear = new Date().getFullYear()


  let load2 = async () => {
    getDocs(
      query(
        collectionGroup(db, " "+currentYear),
        where("Month", "==", dataFromChild),
        where("HIV", "==", "No")
      )
    ).then((querySnapshot) => {
      const TotalUsers = querySnapshot.size;
      setField(TotalUsers);
    });

    getDocs(
      query(collectionGroup(db, " "+currentYear),where("Month", "==", dataFromChild),where("HIV", "==", "Yes"))).then((querySnapshot) => {
      const TotalUsers = querySnapshot.size;
      setColGroup(TotalUsers);
    });
  };

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }
  
  useEffect(() => {
  
  load2();
  });

  const data = [
    { label: "HIV Positive", value: 10, color: "#ef745b" },
    { label: "HIV Negative", value: 80, color: "#ececec3d" },
  ];

  const sizing = {
    margin: { right: 5 },
    width: 550,
    height: 250,
    legend: {
      hidden: false,
      position: { vertical: "top", horizontal: "left" },
    },
  };
  const TotalUsers = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params) => {
    const percent = params.value / TotalUsers;
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (
    <div className="pieChart-container">
      <div className="heading-icon-container-requests dash-header-styling">
        <h4 className="request-login-heading">HIV Testing {dataFromChild}</h4>
        <AppointFilter sendDataToParent={handleDataFromChild} />
      </div>
      <PieChart
        className="piechart"
        series={[
          {
            outerRadius: 120,
            data,
            arcLabel: getArcLabel,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontSize: 14,
            strokeWidth:1
          },
        }}
        style={{
          fill : `red`,
          color: `red`,
          value : 'blueberryTwilight',
          display: 'inline-block',
        }}
        {...sizing}
      />
    </div>
  );
}
