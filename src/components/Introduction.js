import React from 'react';
import Background from '../images/portfolio-cover.jpg';
const backgroundImage = {
    backgroundImage: `url(${Background})`
};

const Introduction = () => (
    <section className="site-hero" style={backgroundImage} id="section-home" data-stellar-background-ratio="0.5">
        <div className="container">
            <div className="row intro-text align-items-center justify-content-center">
                <div className="col-md-10 text-center">
                <h1 className="site-heading site-animate">Howdy, I'm <strong>Shakhawat Hossain</strong></h1>
                <p className="lead site-subheading mb-4 site-animate">A Full Stack developer, eager to dive into newer technologies and love to brush up existing knowledge.</p>
                <p><a href="#section-about" className="smoothscroll btn btn-primary px-4 py-3">More On Me</a></p>
                </div>
            </div>
        </div>
    </section>
);

export default Introduction;
