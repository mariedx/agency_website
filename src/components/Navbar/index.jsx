import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="Navbar">
    <Link to="/">Home</Link>
    {' '}
    <Link to="/about">L&apos;agence</Link>
    {' '}
    <Link to="/works">Projets</Link>
  </div>
);

export default Navbar;
