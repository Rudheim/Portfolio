import React from 'react';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden:{
    opacity: 0
  },
  visible:{
    delay: 0.2,
    opacity: 1,
    transition: {
      duration: 2
    }
  }
}

const Footer = () => {
  return ( 
    <motion.footer
      variants={footerVariants}  
      initial='hidden'
      animate='visible'
    >
      <div className="social">
        <a href="www.twitter.com"><i className="fab fa-twitter grey-text"></i></a>
        <a href="www.facebook.com"><i className="fab fa-facebook-f grey-text"></i></a>
        <a href="www.telegram.com"><i className="fab fa-telegram-plane grey-text"></i></a>
        <a href="www.viber.com"><i className="fab fa-viber grey-text"></i></a>
        <a href="www.instagram.com"><i className="fab fa-instagram grey-text"></i></a>
        <a href="www.whatsapp.com"><i className="fab fa-whatsapp grey-text"></i></a>
      </div>
    </motion.footer>
   );
}
 
export default Footer;