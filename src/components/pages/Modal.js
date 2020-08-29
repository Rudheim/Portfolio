import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pageImgVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { delay: .3, duration: .3} }
}

const Modal = ({setShowModal, page}) => {

  return (
    <AnimatePresence> 
        <div className="page-modal" onClick={() => {setShowModal(false)}} >
          <motion.div variants={pageImgVariants} animate='visible' initial='hidden' className="page-display">
            <div className="page-link black"><a target="_blank" rel="noopener noreferrer" href={page.link}>{page.link}</a></div>
            <img src={page.pagePrev} alt=""/>
          </motion.div>
        </div>
    </AnimatePresence>
  );
}
 
export default Modal;