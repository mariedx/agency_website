import React from 'react';
import { Link } from 'react-router-dom';
import ThemeChoice from '../ThemeChoice';
import './index.scss';

const Navbar = () => (
  <div className="Navbar">
    <Link to="/">Home</Link>
    {' '}
    <Link to="/about">L&apos;agence</Link>
    {' '}
    <Link to="/works">Projets</Link>
    {' '}
    <ThemeChoice />
  </div>
);

export default Navbar;
