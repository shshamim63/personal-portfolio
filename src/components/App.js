import React from 'react';

import NavBar from './NavBar';
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Articles from './Articles';
import Contact from './Contact';
import Footer from './Footer';
import ScrollButton from './scrollButton';
import { PROJECT_LIST } from '../data/project';
import { ARTICLE_LIST } from '../data/article';
const App = () => (
  <div>
    <NavBar />
    <Introduction />
    <AboutMe />
    <Projects projectList={ PROJECT_LIST }/>
    <Articles articleList={ARTICLE_LIST} />
    <Contact />
    <Footer />
    <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
  </div>
);

export default App;
