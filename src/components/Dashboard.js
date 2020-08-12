import React from 'react';
import Home from './Home';

import { motion } from 'framer-motion';

const topVariants = {
  hidden:{
    y: -1000,
  },
  visible:{
    y: 0,
    transition: {
      delay: 0.2,
      type: 'spring',
      damping: 11
    }
  }
}

const bottomVariants = {
  hidden:{
    y: 1000,
  },
  visible:{
    y: 0,
    transition: {
      delay: 0.2,
      type: 'spring',
      damping: 11
    }
  }
}

const hoverVariants = {
  hover:{
    scale: 1.1, 
    originX: 0,
    transition:{
      type: 'spring',
      stiffness: 300,
      damping: 5
    }
  }
}

const Dashboard = () => {
  return (
    <div className="home-page container">
      <motion.div className="top"
        variants={topVariants}  
        initial='hidden'
        animate='visible'>
        <motion.p variants={hoverVariants} whileHover='hover' className="tag html-tag">&lt;html&gt;</motion.p>
        <motion.p variants={hoverVariants} whileHover='hover' className="tag header-tag">&lt;header&gt;<span className="escape-string">&nbsp;&nbsp;.netHeim&nbsp;<span className="tile">|</span></span>&lt;/header&gt;</motion.p>
        <motion.p variants={hoverVariants} whileHover='hover' className="tag body-tag">&lt;body&gt;</motion.p>
      </motion.div>
        <Home />
      <motion.div className="bottom"
        variants={bottomVariants}  
        initial='hidden'
        animate='visible'
      >
        <motion.p variants={hoverVariants} whileHover='hover' className="tag body-tag">&lt;/body&gt;</motion.p>
        <motion.p variants={hoverVariants} whileHover='hover' className="tag html-tag">&lt;/html&gt;</motion.p>
      </motion.div>
    </div>
  );
}
 
export default Dashboard;