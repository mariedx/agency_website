import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Navbar from './components/Navbar';
import ThemeContext from './components/ThemeContext'; import './shared.scss';

const App = () => {
  const [theme, setTheme] = useState('light');

  const contextValue = {
    theme,
    updateTheme: setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <Router>
        <Navbar />
        <div className={theme}>
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/works">
                <Works />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
