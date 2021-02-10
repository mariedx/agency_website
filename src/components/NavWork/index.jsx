import React from 'react';
import { Link } from 'react-router-dom';
import works from '../../data/works';

const NavWork = () => (
  <nav>
    <div>
      {works.map((work) => (<Link to={`/works/${work.slug}`} key={work.slug}>{work.slug}</Link>))}
    </div>
  </nav>
);

export default NavWork;
