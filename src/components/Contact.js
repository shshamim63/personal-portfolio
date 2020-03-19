import React from 'react';

const Contact = () => {
    return(
    <section className="site-section bg-light" id="section-contact">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-3">
                    <div className="section-heading text-center">
                    <h2>Wanna <strong>Start Work</strong> With Me?</h2>
                    </div>
                </div>
                <div className="col-md-12 text-center contact">
                    <p>
                        <a href="mailto:shakhawathossain032@gmail.com"className="social-item"><img src={require('../images/mail.png')} className="" alt="mail" /></a>
                        <a href="https://twitter.com/Shshamim090" className="social-item"><img src={require('../images/twitter.png')} className="" alt="twitter" /></a>
                        <a href="https://www.linkedin.com/in/shakhawathossainshamim/" className="social-item"><img src={require('../images/linkedin.png')} className="" alt="linkedin" /></a>
                        <a href="https://github.com/shshamim63" className="social-item"><img src={require('../images/github-144.png')} className="" alt="github" /></a>
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Contact;