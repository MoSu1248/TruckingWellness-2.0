import { useEffect, useState } from "react";
import { useNavigate, useParams , NavLink } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ClientDetails from "./Tabs/ClientDetails";
import ConsentForm from "./Tabs/ConsentForm";
import HIVTest from "./Tabs/HIVTest";
import PostTest from "./Tabs/PostTest";
import Referrals from "./Tabs/Referrals";
import ScreenQuestions from "./Tabs/ScreenQuestion";
import WellnessScreening from "./Tabs/WellnessScreening";
import WellnessMeasurements from "./Tabs/WellnessMeasurements";
import Counselling from "./Tabs/Counselling";
import "./Edit2.css";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import {  ChevronFirst } from "lucide-react"
import { FaRegEdit } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "./Edit.css"
import "./Edit2.css"


const MySwal = withReactContent(Swal);

const Edit = (appointment_id , setTabt) => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [apppath, setAppPath] = useState(appointment_id.appointment_id);

  const [path, setpath] = useState(`/patients/appointment/${id}`);
  const [path3, setpath3] = useState(`https://console.firebase.google.com/u/0/project/truckingwellness-714f3/firestore/databases/-default-/data/~2FClients~2F${id}`);

    
  const Tab = ({ config }) => {
    const [activeTabs, setActivetabs] = useState(0);
    return (
      <div className="tabs">
        <div className="tabs-headers">

          <div className="flex-container-recent-patients">
            {config.map((entry, index) => (
              <div
                className={` tabs-top-link  ${
                  activeTabs === index ? " active-tab" : ""
                }`}
                onClick={() => setActivetabs(index)}
              >
                {entry.header}
              </div>
            ))}
          </div>
                   <Link className="viewdata-link-styling" to={path3} target="_blank" rel="noopener noreferrer"><FiExternalLink />
                   </Link>
        </div>
        <div className={`${activeTabs === 0 ? "tabs-body-client" : "tabs-body" }`}>{config[activeTabs].component}</div>
        
      </div>
    );
  };
  return (
    <div className="edit-wrapper">
      <div class="edit-containers">
      
        { <Tab className= ""
          config={[
            { header: "Client Details", component: <ClientDetails appointment_id = {apppath} /> },
            { header: "Consent", component: <ConsentForm appointment_id = {apppath}/> },
            { header: "HIV Test", component: <HIVTest appointment_id = {apppath}/> },
            { header: "Counselling", component: <Counselling appointment_id = {apppath}/> },
            { header: "Wellness", component: <WellnessScreening appointment_id = {apppath}/> },
            { header: "Measurements", component: <WellnessMeasurements appointment_id = {apppath} /> },
            { header: "Screening Questions", component: <ScreenQuestions appointment_id = {apppath}/> },
            { header: "Referrals", component: <Referrals appointment_id = {apppath}/> },
            { header: "Post Test", component: <PostTest appointment_id = {apppath}/> },
          ]}
        />}
       
      </div>
    </div>
  );
};

export default Edit;
