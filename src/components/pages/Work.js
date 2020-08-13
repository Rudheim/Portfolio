import React from 'react';
import { motion } from 'framer-motion';

const componentVariants = {
  hidden:{
    x: -2000,
    originX: 0,
    scale: 0
  },
  visible:{
    x: 0,
    scale: 1,
    transition: {
      delay: .5,
      type: 'spring',
      damping: 15,
    }
  },
  exit:{
    x: 2000,
    scale: 0,
    transition:{
      duration: .5
    }
  }
}

const pVariants = {
  hidden:{
    scale: 0,
  },
  visible:{
    scale: 1,
    transition: {
      delay: 1.1,
      type: 'spring'
    }
  },
  hover:{
    scale: 0.8,
    originX: 0,
    transition:{
      type: 'spring',
      stiffness: 300,
      damping: 5
    }
  }
}

const Work = () => {
  return (
    <motion.div className="home"
      variants={componentVariants}  
      initial='hidden'
      animate='visible'
      exit='exit'>
      <p className="tag h1-tag">&lt;h1&gt;<span className="title-str">&nbsp;Portfolio&nbsp;</span>&lt;/h1&gt;</p>
      <motion.p className="tag p-tag"
        variants={pVariants}
        initial='hidden'
        animate='visible'>
      &lt;p&gt;<span className="content-str">
      &nbsp;Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and, recently, English literature. A family person, father of two fractious boys, therefore remote employment is preferred.&nbsp;</span>&lt;/p&gt;</motion.p>
    </motion.div>
  );
}
 
export default Work;