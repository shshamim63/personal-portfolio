import React from 'react';

const AboutMe = () => (

<section className="site-section" id="section-about">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
            <img src={require("../images/aboutpicture.jpg")} className="img-fluid" alt="Hello"></img>
          </div>
          <div className="col-lg-5 pl-lg-5">
            <div className="section-heading">
              <h2>About <strong>Me</strong></h2>
            </div>
            <p className="lead">I am currently working remotely as a technical support engineer for Microverse where I review code and provide technical guidance for web development students in HTML & CSS and Ruby. Love to watch animation movie and coffee drinker.</p>
            <p className="mb-5  ">I have worked with Ruby on Rails, JavaScript, React and Redux, and have build some awesome projects.</p>

            <p>
              <a href="#section-contact" className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
              <a href={require('../document/Resume_Shakawat.pdf')} className="btn btn-secondary px-4 py-2 btn-sm" download>Download CV</a>
            </p>
          </div>
        </div>
      </div>
    </section>
);

export default AboutMe;