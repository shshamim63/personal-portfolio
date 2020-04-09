import React from 'react';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg site-navbar navbar-light bg-transparent " id="pb-navbar">

    <div className="container">
      <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <a className="navbar-brand" href="index.html">Shakhawat Hossain</a>
      <div className="collapse navbar-collapse justify-content-md-center navbar-body" id="navbarsExample09">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#section-home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#section-about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#section-services">Projects</a></li>

          <li className="nav-item"><a className="nav-link" href="#section-blog">Blog</a></li>
          <li className="nav-item"><a className="nav-link" href="#section-contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
