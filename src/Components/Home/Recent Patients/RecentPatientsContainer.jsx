import { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronsRight, Flag } from "lucide-react";
import { FaRegEdit } from "react-icons/fa";
import RecentPatients from "./RecentPatients";
import FlaggedPatients from "./RecentFlagged";
import AlertedPatients from "./AlertedPatients";
import { TiFlag } from "react-icons/ti";

const MySwal = withReactContent(Swal);

const Edit = () => {
  const [ART, setart] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { appointment_id } = useParams();
  const [path, setpath] = useState(`/patients/appointment/${id}`);
  const [img] = useState(TiFlag);

  const Tab = ({ config }) => {
    const [activeTabs, setActivetabs] = useState(0);
    return (
      <div className="patients-tabs">
        <div className="tabs-headers dash-tab-headers">
          <div className="flex-container-recent-patients">
            {config.map((entry, index) => (
              <div
                className={` tabs-top-link dash-tab-links  ${
                  activeTabs === index ? " active-tab" : ""
                }`}
                onClick={() => setActivetabs(index)}
              >
                {entry.header}
              </div>
            ))}
          </div>
          <Link
            className="viewdata-link-styling dash-link-styling"
            to={`/patients`}
            rel="noopener noreferrer"
          >
            <ChevronRight />
          </Link>
        </div>
        <div
          className={`${
            activeTabs === 0
              ? "recent-patients-tabs"
              : " recent-patients-tabs non-recent"
          }`}
        >
          {config[activeTabs].component}
        </div>
      </div>
    );
  };
  return (
    <>
      <RecentPatients />
    </>
  );
};

export default Edit;
