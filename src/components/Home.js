import React from 'react';
import { motion } from 'framer-motion';

const componentVariants = {
  hidden:{
    x: -1500,
    scale: 0,
  },
  visible:{
    x: 0,
    scale: 1,
    transition: {
      delay: 0.2,
      delayChildren: 1,
      type: 'spring',
      damping: 11,
    }
  }
}

const p1Variants = {
  hidden:{
    y: -300,
  },
  visible:{
    y: 0,
    transition: {
      delay: .4,
      duration: 0.5
    }
  }
}

const p2Variants = {
  hidden:{
    y: -300,
  },
  visible:{
    y: 0,
    transition: {
      delay: .8,
      duration: 0.5
    }
  }
}

const p3Variants = {
  hidden:{
    y: -300,
  },
  visible:{
    y: 0,
    transition: {
      delay: 1.2,
      duration: 0.5
    }
  }
}

const Home = () => {
  return (
    <motion.div className="home"
      variants={componentVariants}  
      initial='hidden'
      animate='visible'
    >
      <p className="tag h1-tag">&lt;h1&gt;</p>
        <div className="welcome">
          <motion.p 
          variants={p1Variants} >Hi!</motion.p>
          <motion.p variants={p2Variants}>I'm Igor,</motion.p>
          <motion.p variants={p3Variants}>web developer.</motion.p>
        </div>
      <p className="tag h1-tag">&lt;/h1&gt;</p>
      <p className="tag p-tag">&lt;p&gt;<span className="escape-string">&nbsp; Front End Developer&nbsp;</span>&lt;/p&gt;</p>
      <a href="#1" className="neon-btn">CONTACT ME</a>
    </motion.div>
  );
}
 
export default Home;