import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Home.css";
import RecentPatients from "./Recent Patients/RecentPatients";
import RecentPatientsCont from "./Recent Patients/RecentPatientsContainer";
import RecentMessages from "./Recent Messages/RecentMessages";
import UserStatus from "./UserStatus/UserStatus";
import Test from "./Test/TestCharts";
import Graph from "./recentPatientsGraphs/graphs";
import MonthlyCounter from "./DashCounters/MonthlyCounter";
import DailyCounter from "./DashCounters/DailyCounter";
import DailyLogin from "./DashCounters/DailyLogin";
import ActiveUsers from "./ActiveUsers/ActiveUsers";
import GridBars from "./GridBars/GridBars";
import RecentFlagged from "./Recent Patients/RecentFlagged";

const Home = () => {
  return (
    <div className="wrapper">
      <body className=" dashboard-container">
        <div className="graph-container">
          <div className="graph-inner-container">
            <div>
              <h1 className="home__header">Welcome in, Suhail</h1>
            </div>
            <div className="grid-top-container">
              <GridBars />
              <div className="dash-counter-container">
                <MonthlyCounter />
                <DailyCounter />
                <DailyLogin />
              </div>
            </div>
          </div>
        </div>
        <div className="dash-bottom-container">
          <ActiveUsers />
          <RecentPatientsCont />
          <RecentMessages />
          <RecentMessages />
          <div className="test-grid"></div>
          <RecentFlagged />
        </div>
      </body>
    </div>
  );
};

export default Home;
