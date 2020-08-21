import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';

const componentVariants = {
  hidden: { x: -2000, scale:0, originX: 0,},
  visible: { x: 0, scale: 1, originX: 0, transition: { delay: .5, type: 'spring', damping: 11 } },
  exit: { x: 2000, originX: 0, scale: 0, transition:{ duration: .5 } } 
}

const p1Variants = {
  hidden: { y: -300 },
  visible1: { y: 0, transition: { delay: .7, duration: .5 } },
  visible2: { y: 0, transition: { delay: 1.1, duration: .5 } },
  visible3: { y: 0, transition: { delay: 1.5, duration: .5 } },
  hover: { scale: .8, originX: 0, transition:{ type: 'spring', stiffness: 300, damping: 5 } }
}

const buttonVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition:{ delay: 1.7, duration: 0.4 } },
  hover: { scale: 10, transition:{ type: 'spring', stiffness: 300, damping: 5 } }
}

const Home = () => {

  const {curLanguage} = useContext(LanguageContext);

  return (
    <motion.div className="home" variants={componentVariants} initial='hidden' animate='visible' exit='exit'>
      <p className="tag h1-tag">&lt;h1&gt;</p>
        <div className="welcome">
          <motion.p variants={p1Variants} animate='visible1' whileHover='hover'>{curLanguage.home.first}</motion.p>
          <motion.p variants={p1Variants} animate='visible2' whileHover='hover' whileTap='tap'>{curLanguage.home.second}</motion.p>
          <motion.p variants={p1Variants} animate='visible3' whileHover='hover'>{curLanguage.home.third}</motion.p>
        </div>
      <p className="tag h1-tag">&lt;/h1&gt;</p>
      <p className="tag p-tag">&lt;p&gt;<span className="escape-string">&nbsp; Front End Developer&nbsp;</span>&lt;/p&gt;</p>
      <NavLink to="/contact" className="btn-container">
        <motion.div className="button-neon" variants={buttonVariants}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {curLanguage.home.btn}
        </motion.div>
      </NavLink>
    </motion.div>
  );
}
 
export default Home;