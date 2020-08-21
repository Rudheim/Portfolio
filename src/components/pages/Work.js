import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import pizzaimg_logo from '../../assets/pages images/pizza/pizza-logo.jpg';
import pizzapage_img from '../../assets/pages images/pizza/pizza-img.jpg';
import weatherimg_logo from '../../assets/pages images/weather/weather-logo.jpg';
import weatherpage_img from '../../assets/pages images/weather/weather-img.jpg';

const componentVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { delay: .5, delayChildren: .6, staggerChildren: .4, } },
  exit:{ scale: 0, transition:{ duration: .5 } }
}

const pageLogoVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: 'spring', damping: 15 } },
  exit: { scale: 0, transition: { duration: .5 } }
}

const Work = () => {

  const [showModal, setShowModal] = useState(false);
  const [pageData, setPageData] = useState();

  const data = [
    { pageLogo: pizzaimg_logo, alt: '', name: 'Panucci\'s Pizza', link: 'www.pizza.com', pagePrev: pizzapage_img, id: 1 },
    { pageLogo: weatherimg_logo, alt: '', name: 'SimpleWeather', link: 'www.simpleweather.com', pagePrev: weatherpage_img, id: 2 },
    { pageLogo: pizzaimg_logo, alt: '', name: 'Taemno.net',  link: 'Taemno.net', pagePrev: pizzapage_img, id: 3 },
    { pageLogo: pizzaimg_logo, alt: '', name: 'Panucci\'s Pizza', link: 'www.pizza.com', pagePrev: pizzapage_img, id: 4 },
    { pageLogo: pizzaimg_logo, alt: '', name: 'Weather', link: 'www.weather.com', pagePrev: pizzapage_img, id: 5 },
    { pageLogo: pizzaimg_logo, alt: '', name: 'Taemno.net', link: 'Taemno.net', pagePrev: pizzapage_img, id: 6 }
  ]

  return (
    <motion.div className="home" variants={componentVariants} initial='hidden' animate='visible' exit='exit' >
      <div className="showcase welcome">
        {data.map(page => { return (
          <motion.div className="img-placeholder" key={page.id} variants={pageLogoVariants} >
            <img src={page.pageLogo} alt="" className="page-logo" />
            <div onClick={() => {setShowModal(true); setPageData(page)}} className="btn-floating btn-large waves-effect waves-light amber darken-4 more-info"><i className="material-icons">search</i></div>
            <div className="description">
              <p>{page.name}</p>
            </div>
          </motion.div>     
          )}
        )}
        {showModal && <Modal page={pageData} showModal={showModal} setShowModal={setShowModal} /> }
      </div>
    </motion.div>
  );
}
 
export default Work;