import React from 'react';

const Footer = () => {
    const today = new Date();   
    return(
        <footer className="site-footer">
            <div className="container">
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
