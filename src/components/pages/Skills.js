import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import fb from '../../assets/skills icons/fb.png';
import { LanguageContext } from '../../contexts/LanguageContext';


const componentVariants = {
  hidden: { x: -2000, originX: 0, scale: 0 },
  visible: { x: 0, scale: 1, transition: { delay: .5, type: 'spring', damping: 15 } },
  exit: { x: 2000, originX: 0, scale: 0, transition: { duration: 0.5 } }
}

const pVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { delay: 1.1, type: 'spring' } },
  hover: { scale: 0.8, originX: 0, transition:{ type: 'spring', stiffness: 300, damping: 5 } }
}

const imgContainerVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { delayChildren: 1.7, staggerChildren: .4, } }
}

const imageVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: 'spring', damping: 15 } }
}

const Skills = () => {

  const {curLanguage} = useContext(LanguageContext);

  return (
    <motion.div className="home" variants={componentVariants} initial='hidden' animate='visible' exit='exit'>
      <p className="tag h2-tag">&lt;h1&gt;<span className="title-str">&nbsp;{curLanguage.skills.title}&nbsp;</span>&lt;/h1&gt;</p>
      <motion.div variants={imgContainerVariants} className="skills-img-container">
        <motion.i variants={imageVariants} className="fab fa-react blue-text"></motion.i>
        <motion.i variants={imageVariants} className="fab fa-js-square yellow-text"></motion.i>
        <motion.img variants={imageVariants} src={fb} alt="themeImg"/>
        <motion.i variants={imageVariants} className="fab fa-html5 orange-text text-darken-3"></motion.i>
        <motion.i variants={imageVariants} className="fab fa-css3 blue-text"></motion.i>
      </motion.div>
      <motion.p className="tag p-tag" variants={pVariants} initial='hidden' animate='visible'>
        &lt;p&gt;<span className="content-str">
        &nbsp;{curLanguage.skills.txt1}<br/>
        {curLanguage.skills.txt2}<a target="_blank" rel="noopener noreferrer" href={curLanguage.skills.cv}>{curLanguage.skills.txt6}</a>{curLanguage.skills.txt7}<NavLink to="/contact" className="teal-text text-accent-4">{curLanguage.skills.txt3}</NavLink>.<br/>
        {curLanguage.skills.txt4} {curLanguage.skills.txt5} &nbsp;</span>&lt;/p&gt;
      </motion.p>
    </motion.div>
  );
}
 
export default Skills;