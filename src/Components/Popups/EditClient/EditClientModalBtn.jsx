import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import Modal from './EditClientModal';
import './editPop.css'


const EditClientModalBtn = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);



  return (
      <>

          <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='edit-btn'
              onClick={() => (modalOpen ? close() : open())}
          >Edit</motion.button>

          <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    mode="wait"
    // Fires when all exiting nodes have completed animating out
    onExitComplete={() => null}
>
    {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
</AnimatePresence>
          
    </>
  )
}

export default EditClientModalBtn;