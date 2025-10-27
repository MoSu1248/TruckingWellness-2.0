import { motion } from "framer-motion";
import BackDrop from "./BackDrop";

import './popup.css'

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  

const Modal = ({ handleClose,  appointment_id }) => {

    return (
      <BackDrop onClick={handleClose} appointment_id={appointment_id} >
          <motion.div
            onClick={(e) => e.stopPropagation()}  
            className="modal orange-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
          </motion.div>
      </BackDrop>
    );
  };

  
  export default Modal;