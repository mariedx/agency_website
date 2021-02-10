import { createContext } from 'react';

const ThemeContext = createContext({
  theme: '',
  // eslint-disable-next-line no-unused-vars
  updateTheme: (name) => {},
});

export default ThemeContext;
