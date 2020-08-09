import React from 'react';

const Home = () => {
  return (
      <div className="left-side">
        <div className="top">
          <p className="tag">&lt;html&gt;</p>
          <p className="tag">&lt;header&gt;<span className="escape-string">&nbsp;.netHeim&nbsp;<span className="tile">|</span></span>&lt;/header&gt;</p>
          <p className="tag">&lt;body&gt;</p>
        </div>
        <div className="middle">
          <p className="tag">&lt;h1&gt;</p>
          <div className="welcome">
            <h1>Hi!</h1>
            <h1>I'm Igor,</h1>
            <h1>a web developer.</h1>
          </div>
          <p className="tag">&lt;/h1&gt;</p>
          <p className="tag">&lt;p&gt;<span className="escape-string">&nbsp; Front End Developer&nbsp;</span>&lt;/p&gt;</p>
          <a href="#1" className="neon-btn">CONTACT ME</a>
        </div>
        <div className="bottom">
          <p className="tag">&lt;/body&gt;</p>
          <p className="tag">&lt;/html&gt;</p>
        </div>
      </div>
  );
}
 
export default Home;