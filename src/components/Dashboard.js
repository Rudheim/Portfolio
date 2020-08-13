import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Contact from './pages/Contact';

const tagsVariants = {
  hiddenTop:{
    y: -1000,
  },
  hiddenBottom:{
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
    scale: 1.2,
    transition:{
      type: 'spring',
      stiffness: 200,
      damping: 5
    }
  },
  tap:{
    scale: 0.7,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 5
    }
  }
}

const Dashboard = () => {

  const location = useLocation();

  return (
   <AnimateSharedLayout>
    <motion.div className="home-page container">
      <motion.div className="top" layout
        variants={tagsVariants}  
        initial='hiddenTop'
        animate='visible'>
        <motion.p variants={hoverVariants} whileHover='hover' whileTap='tap' className="tag html-tag">&lt;html&gt;</motion.p>
        <motion.p variants={hoverVariants} whileHover='hover' whileTap='tap' className="tag header-tag">&lt;header&gt;<span className="escape-string">&nbsp;&nbsp;.netHeim&nbsp;<span className="tile">|</span></span>&lt;/header&gt;</motion.p>
        <motion.p variants={hoverVariants} whileHover='hover' whileTap='tap' className="tag body-tag">&lt;body&gt;</motion.p>
      </motion.div>
      <motion.div className="middle-block">
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
      </motion.div>
      <motion.div layout className="bottom"
        variants={tagsVariants}  
        initial='hiddenBottom'
        animate='visible'
      >
        <motion.p variants={hoverVariants} whileHover='hover' whileTap='tap' className="tag body-tag">&lt;/body&gt;</motion.p>
        <motion.p variants={hoverVariants} whileHover='hover' whileTap='tap' className="tag html-tag">&lt;/html&gt;</motion.p>
      </motion.div>
    </motion.div>
    </AnimateSharedLayout>
    
  );
}
 
export default Dashboard;