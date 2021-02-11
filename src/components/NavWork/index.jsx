import React from 'react';
import { Link } from 'react-router-dom';
import works from '../../data/works';
import './index.scss';

const NavWork = () => (
  <nav>
    <div className="NavWork">
      {works.map((work) => (<Link to={`/works/${work.slug}`} key={work.slug}>{work.slug}</Link>))}
    </div>
  </nav>
);

export default NavWork;
