import React from 'react';

const Article = () => (
    <a href="link" className="custom-card">
        <div className="card">
            <img src={require("../images/p1.jpg")} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </a>
);

export default Article;
