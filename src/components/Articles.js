import React from 'react';
import Article from './Article';

const Articles = () => (
    <section className="site-section bg-light" id="section-blog">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="section-heading text-center">
              <h2>My <strong>Articles</strong></h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Article />
          </div>
          <div className="col-md-4">
            <Article />
          </div>
          <div className="col-md-4">
            <Article />
          </div>
        </div>
      </div>
    </section>
);

export default Articles;