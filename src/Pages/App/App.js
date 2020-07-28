import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import logo from '../../assets/logos/logo.svg';
import About from '../../components/AboutView/About.js';
import Home from '../../components/HomeView/Home.js';
import GitView from '../../components/GitView/GitView.js';
import Article from '../Article/Article';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav className="header">
          <div className="header-navigation-block">
            <span className="headder-brand_element">
              <img src={logo} className='headder-brand_logo' alt=''></img>
              <span className="headder-brant_name">React Starter kit</span>
            </span>
            <ul className="navigation-list_element">
              <li><Link to="/" className='navigation-list-item'>Home</Link></li>
              <li><Link to="/about" className='navigation-list-item'>About</Link></li>
              <li><Link to="/git" className='navigation-list-item'>GitHub</Link></li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/git">
            <GitView></GitView>
          </Route>
        </Switch>
        <Article></Article>
        <footer>
          <p>React starter kit @giri</p>
        </footer>
      </div>
    </Router>
  );
}
export default App;
