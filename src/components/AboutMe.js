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
          <p className="lead">Hi, I'm Shamim, a multi-talented human with over 5+ years of experiences in a wide range of web-development disciplines</p>
          <p className="lead-bio">I've done remote work for US-based companies, mentored new developers, collaborated with talented people around the world to create digital products for both business and consumer use. I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself and do interesting things that matter.
          I am currently participating in open source projects and am open to new opportunities.
			    </p>
          <p className="mb-5">You can read more about my biography, experience, skills, education and much more by downloading the CV.
			    </p>
          <p>
            <a href="#section-contact" className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
            <a href={require('../document/Hossain_Shakhawat.pdf')} className="btn btn-secondary px-4 py-2 btn-sm" download>Download CV</a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;