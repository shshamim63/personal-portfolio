import React from 'react';

const Contact = () => {
    return(
    <section className="site-section bg-light" id="section-contact">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-5">
                    <div className="section-heading text-center">
                    <h2>Wanna <strong>Start Work</strong> With Me?</h2>
                    </div>
                </div>
                <div className="col-md-5 pl-md-5">
                    <h3 className="mb-5">My Contact Details</h3>
                    <ul className="site-contact-details">
                        <li>
                            <span className="text-uppercase">Email</span>
                            shshamim63@gmail.com
                        </li>
                        <li>
                            <span className="text-uppercase">Phone</span>
                            +880-1671-451-201
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Contact;