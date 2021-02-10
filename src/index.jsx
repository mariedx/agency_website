import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agency from './pages/Agency';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import ThemeContext from './components/ThemeContext';
import './shared.scss';

const App = () => {
  const [theme, setTheme] = useState('light');

  const contextValue = {
    theme,
    updateTheme: setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={theme}>
        <Router>
          <Navbar />
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about">
                <Agency />
              </Route>
              <Route path="/works">
                <Projects />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
