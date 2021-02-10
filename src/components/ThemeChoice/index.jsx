import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const ThemeChoice = () => {
  const { theme, updateTheme } = useContext(ThemeContext);

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    updateTheme(value);
  };

  return (
    <select name="theme" defaultValue={theme} onChange={handleChange}>
      <option value="dark">🌚</option>
      <option value="light">🌝</option>
    </select>
  );
};

export default ThemeChoice;
