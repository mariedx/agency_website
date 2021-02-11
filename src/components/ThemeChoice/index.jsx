import React, { useContext, useEffect } from 'react';
import ThemeContext from '../ThemeContext';
import './index.scss';

const ThemeChoice = () => {
  const { theme, updateTheme } = useContext(ThemeContext);

  useEffect(() => {
    updateTheme(localStorage.getItem('value') || 'light');
  }, []);

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    localStorage.setItem('value', value);
    updateTheme(value);
  };

  return (
    <select name="theme" defaultValue={theme} onChange={handleChange}>
      <option value="dark">🌝</option>
      <option value="light">🌚</option>
    </select>
  );
};

export default ThemeChoice;
