import React from 'react';
import githubIcon from '../images/github-144.png';
import deploy from '../images/launch-96.png';

const EachProject = ({projectTitle, projectGithubLink, imageSource, description, deployLink, technologies}) => (
    <div className="card mt-4">
        <img className="card-img-top" src={require(`../images/${imageSource}`)} alt="Cardcap" />
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
