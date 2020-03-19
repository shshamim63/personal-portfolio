import React from 'react';

const Article = ({articlePic, title, articleLink}) => (
    <a href={articleLink} className="custom-card">
        <div className="card">
            <img src={require(`../images/${articlePic}`)} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{title}</p>
            </div>
        </div>
    </a>
);

export default Article;
