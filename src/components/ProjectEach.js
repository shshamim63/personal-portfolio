import React from 'react';
import imagepart from '../images/project.png';
import githubIcon from '../images/github-144.png';
import deploy from '../images/launch-96.png';

const EachProject = () => (
    <div className="card">
        <img className="card-img-top" src={imagepart} alt="Cardcap" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="w-30">
                <a href="hello" className="link"><img className="linkicon" src={githubIcon} alt="githubIcon"/></a>
                <a href="hello" className="link"><img className="linkicon" src={deploy} alt="githubIcon"/></a>
            </div>
        </div>
    </div>
);

export default EachProject;
