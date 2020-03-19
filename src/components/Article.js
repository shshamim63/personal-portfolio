import React from 'react';

const Article = ({articlePic, title, articleLink}) => (
    <a href={articleLink} className="custom-card">
        <div className="card card-height">
            <img src={require(`../images/${articlePic}`)} className="article-image card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{title}</p>
            </div>
        </div>
    </a>
);

export default Article;
