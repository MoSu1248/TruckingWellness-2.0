import { useCollectionData } from "react-firebase-hooks/firestore";
import { setDoc, updateDoc, doc, deleteDoc, orderBy } from "firebase/firestore";
import { collection, limit } from "firebase/firestore";
import { collectionGroup, query, where, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig/firebase";
import Folder from "../../Resources/folder.png";
import { FaUserAlt } from "react-icons/fa";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import "./recentPatients.css";
import { BiMessageDetail } from "react-icons/bi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

import Box from "@mui/material/Box";

export default function SimpleLineChart() {
  const [jan, setJan] = useState(20);
  const [feb, setFeb] = useState(50);
  const [mar, setMar] = useState(70);
  const [apr, setApr] = useState(10);
  const [may, setMay] = useState(5);
  const [jun, setJun] = useState(2);
  const [jul, setJul] = useState(90);
  const [aug, setAug] = useState(25);
  const [sep, setSep] = useState(14);
  const [oct, setOct] = useState(22);
  const [nov, setNov] = useState(43);
  const [dec, setDec] = useState(64);

  let currentYear = 24;
  let counter = 0;

  const uData = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];
  const xLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  //loads data
  // let load = async () => {
  //   await getDocs(
  //     query(
  //       collectionGroup(db, " " + currentYear),
  //       where("Month", "==", `January`)
  //     )
  //   ).then((querySnapshot) => {
  //     const TotalUsers = querySnapshot.size;
  //     setJan(TotalUsers);
  //   });
  //   await getDocs(
  //     query(
  //       collectionGroup(db, " " + currentYear),
  //       where("Month", "==", `February`)
  //     )
  //   ).then((querySnapshot) => {
  //     const TotalUsers = querySnapshot.size;
  //     setFeb(TotalUsers);
  //   });
  //   await getDocs(
  //     query(
  //       collectionGroup(db, " " + currentYear),
  //       where("Month", "==", `March`)
  //     )
  //   ).then((querySnapshot) => {
  //     const TotalUsers = querySnapshot.size;
  //     setMar(TotalUsers);
  //   });
  //   await getDocs(
  //     query(
  //       collectionGroup(db, " " + currentYear),
  //       where("Month", "==", `April`)
  //     )
  //   ).then((querySnapshot) => {
  //     const TotalUsers = querySnapshot.size;
  //     setApr(TotalUsers);
  //   });
  //   await getDocs(
  //     query(collectionGroup(db, " " + currentYear), where("Month", "==", `May`))
  //   ).then((querySnapshot) => {
  //     const TotalUsers = querySnapshot.size;
  //     setMay(TotalUsers);
  //   });
  //   await getDocs(
  //     query(
  //       collectionGroup(db, " " + currentYear),
  //       where("Month", "==", `June`)
  //     )
  //   ).then((querySnapshot) => {
  //     const TotalUsers = querySnapshot.size;
  //     setJun(TotalUsers);
  //   });
  //   await getDocs(
  //     query(
  //       collectionGroup(db, " " + currentYear),
  //       where("Month", "==", `July`)
  //     )
  //   ).then((querySnapshot) => {
  //     const TotalUsers = querySnapshot.size;
  //     setJul(TotalUsers);
  //   });
  //   await getDocs(
  //     query(
  //       collectionGroup(db, " " + currentYear),
  //       where("Month", "==", `August`)
  //     )
  //   ).then((querySnapshot) => {
  //     const TotalUsers = querySnapshot.size;
  //     setAug(TotalUsers);
  //   });
  //   await getDocs(
  //     query(
  //       collectionGroup(db, " " + currentYear),
  //       where("Month", "==", `September`)
  //     )
  //   ).then((querySnapshot) => {
  //     const TotalUsers = querySnapshot.size;
  //     setSep(TotalUsers);
  //   });
  //   await getDocs(
  //     query(
  //       collectionGroup(db, " " + currentYear),
  //       where("Month", "==", `October`)
  //     )
  //   ).then((querySnapshot) => {
  //     const TotalUsers = querySnapshot.size;
  //     setOct(TotalUsers);
  //   });
  //   await getDocs(
  //     query(
  //       collectionGroup(db, " " + currentYear),
  //       where("Month", "==", `November`)
  //     )
  //   ).then((querySnapshot) => {
  //     const TotalUsers = querySnapshot.size;
  //     setNov(TotalUsers);
  //   });
  //   await getDocs(
  //     query(
  //       collectionGroup(db, " " + currentYear),
  //       where("Month", "==", `December`)
  //     )
  //   ).then((querySnapshot) => {
  //     const TotalUsers = querySnapshot.size;
  //     setDec(TotalUsers);
  //   });
  // };

  // useEffect(() => {
  //   load();
  // }, [counter]);
  const margin = { right: 24 };

  return (
    <div className="lineGraph-container">
      <div className="heading-icon-container-requests dash-header-styling">
        <h4 className="request-login-heading ">Total Patients</h4>
      </div>
      <Box sx={{ width: "100%", height: 600 }}>
        <LineChart
          series={[{ data: uData, label: "Clients" ,color: "#ef745b" }]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          yAxis={[{ width: 50 }]}
          margin={margin}
        />
      </Box>
    </div>
  );
}
