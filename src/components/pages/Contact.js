import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import M from "materialize-css";
import { LanguageContext } from '../../contexts/LanguageContext';
import {app} from '../../config/FireBaseConfig';

const db = app.firestore();

const componentVariants = {
  hidden: { x: -2000, originX: 0, scale: 0 },
  visible: { x: 0, scale: 1, transition: { delay: .5, type: 'spring', damping: 15 } },
  exit: { x: 2000, originX: 0, scale: 0, transition: { duration: .5 } }
}

const pVariants = { 
  hidden: { scale: 0, },
  visible: { scale: 1, transition: { delay: 1.1, type: 'spring' } }
}

const Contact = () => {

  const {curLanguage} = useContext(LanguageContext);

  useEffect(() => {
    M.textareaAutoResize(document.querySelector('#textarea'));
  }, [])

  const [letter, setLetter] = useState();

  const handleChange = (e) => {
    setLetter({...letter, [e.target.id]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    letter ? (db.collection("letters").doc().set(letter)
                .then(() => {
                  setLetter();
                  document.querySelector('#email').value = '';
                  document.querySelector('#textarea').value = '';
                  M.toast({html: curLanguage.contacts.toast});
                })
    ) : (M.toast({html: curLanguage.contacts.toast2}));
  }


  const handleClick = (e) => {
    const number = e.target.textContent;
    var el = document.createElement('textarea');
    el.value = number;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    M.toast({html: curLanguage.skills.toast})
  }
  return (
    <motion.div className="home" variants={componentVariants} initial='hidden' animate='visible' exit='exit'>
      <div className="theme-img-container">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="500px" height="422px" viewBox="0 0 5000 4220" preserveAspectRatio="xMidYMid meet">
          <g id="layer101" fill="#262626" stroke="none">
          <path d="M3600 4181 c-214 -70 -3300 -1176 -3340 -1196 -103 -52 -190 -156 -229 -273 -25 -72 -28 -191 -7 -267 7 -27 134 -385 281 -795 147 -410 314 -880 372 -1045 58 -165 117 -322 131 -349 100 -184 337 -287 537 -232 96 26 3321 1177 3384 1208 156 75 261 248 261 428 0 37 -67 236 -301 891 -165 464 -345 970 -400 1124 -105 297 -133 351 -211 415 -144 119 -302 149 -478 91z m280 -232 c39 -22 80 -78 105 -143 40 -106 772 -2161 770 -2164 -1 -1 -62 26 -136 61 -226 108 -331 158 -414 197 -44 21 -134 64 -200 95 -165 79 -482 229 -585 277 -47 22 -149 71 -227 108 l-143 68 44 94 c24 51 69 147 101 213 32 66 115 242 185 390 70 149 171 362 225 475 53 113 112 238 131 278 32 70 34 72 70 72 20 0 53 -9 74 -21z m-433 -96 c-5 -16 -115 -250 -316 -667 -39 -81 -71 -149 -71 -151 0 -2 -41 -88 -91 -191 -50 -104 -102 -212 -114 -241 l-23 -52 -54 26 c-268 130 -476 223 -498 223 -15 0 -36 -10 -48 -22 -11 -13 -75 -140 -142 -283 -67 -143 -123 -261 -125 -263 -2 -2 -217 98 -510 238 -102 49 -148 71 -375 178 -47 22 -143 68 -215 102 -71 34 -154 73 -184 87 -29 13 -51 26 -48 29 6 7 2797 1002 2811 1003 4 1 6 -7 3 -16z m-2918 -1209 c95 -46 175 -84 176 -84 1 0 74 -34 161 -76 182 -87 314 -150 429 -204 84 -40 176 -83 418 -199 130 -62 147 -72 139 -88 -15 -28 -162 -335 -162 -338 0 -2 -37 -79 -81 -171 -45 -93 -119 -248 -164 -344 -46 -96 -135 -285 -199 -420 -65 -135 -131 -275 -148 -312 -18 -38 -34 -68 -37 -68 -8 1 -784 2182 -795 2234 -11 54 -2 106 25 140 26 33 17 35 238 -70z m2097 -263 c115 -54 259 -122 319 -151 61 -29 146 -69 190 -90 44 -21 134 -63 200 -95 66 -31 152 -72 190 -90 39 -18 117 -55 175 -83 326 -154 460 -218 595 -282 55 -26 145 -69 200 -95 l100 -48 -35 -12 c-19 -7 -631 -225 -1360 -485 -729 -259 -1455 -518 -1613 -574 -158 -57 -286 -100 -285 -97 2 3 15 31 29 61 15 30 74 154 131 275 58 121 194 407 303 635 108 228 233 489 276 579 43 90 79 165 79 167 0 1 45 96 100 209 55 114 100 211 100 215 0 18 51 60 73 60 13 0 118 -44 233 -99z"/>
          </g>
        </svg>
      </div>
      <p className="tag h2-tag">&lt;h1&gt;<span className="title-str">&nbsp;{curLanguage.contacts.title}&nbsp;</span>&lt;/h1&gt;</p>
        <motion.p className="tag p-tag" variants={pVariants} initial='hidden' animate='visible'>
          &lt;p&gt;<span className="content-str"> &nbsp; {curLanguage.contacts.txt1} <br/>
          {curLanguage.contacts.txt2} <a href="https://telegram.dog/Rudheim" className="blue-text">Telegram</a>, <a href="viber://chat?number=+380965263155" className="purple-text">Viber</a> and <span className="green-text">WhatsUp</span>{curLanguage.contacts.txt3}<span className="teal-text text-accent-4" onClick={handleClick} >+380965263155</span> &nbsp;</span>&lt;/p&gt;
        </motion.p>
        <motion.form variants={pVariants} className="row" onSubmit={handleSubmit}>
          <div className="input-field col s12">
            <i className="material-icons prefix grey-text">email</i>
            <input id="email" type="email" onChange={handleChange} className="validate" required/>
            <label htmlFor="email">{curLanguage.contacts.email}</label>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix grey-text">mode_edit</i>
            <textarea id="textarea" className="materialize-textarea validate" onChange={handleChange} required></textarea>
            <label htmlFor="textarea">{curLanguage.contacts.msg}</label>
          </div>
          <div to="/contact" className="btn-container center" onClick={handleSubmit}>
            <div className="button-neon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {curLanguage.contacts.btn}
            </div>
          </div>
        </motion.form>
    </motion.div>
  );
}
 
export default Contact;