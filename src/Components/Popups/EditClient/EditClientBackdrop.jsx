import { motion } from "framer-motion";
import './editPop.css'
import { IoCloseSharp } from "react-icons/io5";
import EditInfo from "../../Nurses/EditInfo";


const EditClientBackdrop = ({ appointment_id , onClick  }) => {

    return (
      <motion.div 
        className="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button className="close-btn"  onClick={onClick}><IoCloseSharp />
        </button>
        <EditInfo/>
      </motion.div>
    );
};
  
export default EditClientBackdrop;