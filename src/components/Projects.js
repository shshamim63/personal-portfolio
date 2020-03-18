import React from 'react';

import EachProject from './ProjectEach';
const Projects = ({project}) => (
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
          <div className="col-md-6">
            <EachProject />
          </div>
          <div className="col-md-6">
            <EachProject />
          </div>
          <div className="col-md-6">
            <EachProject />
          </div>
          <div className="col-md-6">
            <EachProject />
          </div>
        </div>
      </div>
    </section>
);

export default Projects;
