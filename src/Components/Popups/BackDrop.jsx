import { motion } from "framer-motion";
import './popup.css'
import Edit from "../EditPatients/Edit";
import { IoCloseSharp } from "react-icons/io5";
import LoadingPop from "./LoadingPop/LoadingPopup";
import { useState, useEffect } from "react";
const Backdrop = ({ appointment_id , onClick  }) => {


  const [isloading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 700);
  
  })

  return (
<>
    {isloading === true? <LoadingPop /> : (
      <motion.div 
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="close-btn"  onClick={onClick}><IoCloseSharp />
      </button>
      <Edit appointment_id={appointment_id}  />
      
    </motion.div>
      )}
      </>
    );
};
  
export default Backdrop;