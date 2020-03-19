import React from 'react';
import Article from './Article';

const Articles = ({articleList}) => (
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
          {
            articleList.map(articles => (
              <div className="col-md-4 mt-3" key={articles.articleId}>
                <Article  
                  articlePic={articles.articlePic} 
                  title={articles.title}
                  articleLink={articles.articleLink}
                />
              </div> 
            ))
          }
        </div>
      </div>
    </section>
);

export default Articles;