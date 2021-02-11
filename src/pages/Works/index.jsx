import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StudyCase from '../../components/StudyCase';
import NavWork from '../../components/NavWork';
import './index.scss';

const Works = () => (
  <Router>
    <div className="Works">
      <h2>Au fil des années, nous avons pu accompagner les meilleurs.</h2>
      <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
    </div>
    <NavWork />
    <Switch>
      <Route path="/works/:workSlug">
        <StudyCase />
      </Route>
    </Switch>
  </Router>
);

export default Works;
