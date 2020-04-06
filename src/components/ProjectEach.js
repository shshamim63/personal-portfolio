import React from 'react';
import githubIcon from '../images/github-144.png';
import deploy from '../images/live-demo.png';

const EachProject = ({projectTitle, projectGithubLink, imageSource, description, deployLink, technologies}) => (
    <div className="card mt-4">
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img className="card-img-top" src={require(`../images/${imageSource}`)} alt="Cardcap" />
                </div>
                <div class="flip-card-back">
                    <p className="margin-25">
                        <a href={projectGithubLink} className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Github</a>
                        <a href={deployLink} className="btn btn-secondary px-4 py-2 btn-sm" download>Live Demo</a>
                    </p>
                </div>
            </div>
        </div>
        <div className="card-body">
            <h5 className="card-title">{projectTitle}</h5>
            <p className="card-text">{description}</p>
            <div className="project-footer">
                <ul className="technologies">
                {
                    technologies.map((language, index) => (
                    <li className="l-items" key={index+1}>{language}</li>
                    ))
                }
                </ul>
                <div className="w-30">
                    <a href={projectGithubLink} className="link"><img className="linkicon" src={githubIcon} alt="githubIcon"/></a>
                    <a href={deployLink} className="link"><img className="linkicon" src={deploy} alt="githubIcon"/></a>
                </div>
            </div>
        </div>
    </div>
);

export default EachProject;
