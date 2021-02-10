import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <Home />
        </Route>
        <Route path="/works">
          <Home />
        </Route>
      </Switch>
    </main>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
