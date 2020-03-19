import React from 'react';
import EachProject from './ProjectEach';
const Projects = ({projectList}) => (
  <section className="site-section bg-light" id="section-services">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="section-heading text-center">
            <h2>My <strong>Projects</strong></h2>
          </div>
        </div>
      </div>
      <div className="row">
      {
        projectList.map(project => (
          <div className="col-md-6" key={project.projectId}>
            <EachProject
              projectTitle ={project.projectTitle}
              projectGithubLink={project.projectGithubLink}
              imageSource={project.imageSource}
              deployLink={project.deployLink}
              description={project.description}
              technologies = {project.technologies}
            />
          </div>
        ))
      }
      </div>
    </div>
  </section>
);

export default Projects;
