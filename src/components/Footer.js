import React from 'react';
import { motion } from 'framer-motion';
import M from "materialize-css";
import { useEffect } from 'react';

const footerVariants = {
  hidden: { y: 250 },
  visible: { y: 0, transition: { delay: 1.5, type: 'tween', duration: 1 } }
}

const Footer = () => {

  useEffect(() => {
    M.Tooltip.init(document.querySelectorAll('.tooltipped'));
  }, [])

  return ( 
    <motion.footer variants={footerVariants} initial='hidden' animate='visible' >
      <div className="social">
        <a href="https://telegram.dog/Rudheim" className="tooltipped" data-position="top" data-tooltip="Telegram"><i className="fab fa-telegram-plane grey-text"></i></a>
        <a href="viber://chat?number=+380965263155" className="tooltipped" data-position="top" data-tooltip="Viber"><i className="fab fa-viber grey-text"></i></a>
        <a href="https://github.com/Rudheim?tab=repositories" className="tooltipped" data-position="top" data-tooltip="GitHub"><i className="fab fa-github grey-text"></i></a>
        <a href="http://m.me/100011799960695" className="tooltipped" data-position="top" data-tooltip="Messenger"><i className="fab fa-facebook-messenger grey-text"></i></a>
      </div>
    </motion.footer>
   );
}
 
export default Footer;