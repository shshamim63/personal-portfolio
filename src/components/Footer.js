import React from 'react';

const Footer = () => {
    const today = new Date();   
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-12 text-center">
                        <p>
                            <a href="mailto:shakhawathossain032@gmail.com"className="social-item"><img src={require('../images/mail.png')} className="" alt="mail" /></a>
                            <a href="https://twitter.com/Shshamim090" className="social-item"><img src={require('../images/twitter.png')} className="" alt="twitter" /></a>
                            <a href="https://www.linkedin.com/in/shakhawathossainshamim/" className="social-item"><img src={require('../images/linkedin.png')} className="" alt="linkedin" /></a>
                            <a href="https://github.com/shshamim63" className="social-item"><img src={require('../images/github-144.png')} className="" alt="github" /></a>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <p className="col-12 text-center">
                    Shakhawat Hossain Portfolio { today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()} powered by <a href="https://reactjs.org/">React</a> and <a href="https://getbootstrap.com/" target="_blank" className="text-primary">Bootstrap</a><img src={require('../images/heart.png')} className="icon-heart" alt="love"/>
                    </p>
                </div>
            </div>
        </footer>


    );
};

export default Footer;
