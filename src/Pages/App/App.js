import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import BasicPage from '../HomePage/BasicPage.js';

function App() {
  return (
    <Router>
      <header className="header">
        Headder
      </header>
      <Switch>
        <Route path="/">
          <BasicPage></BasicPage>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
