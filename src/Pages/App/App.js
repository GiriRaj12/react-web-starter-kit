import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { About, Git, Home } from '../index.js';
import logo from '../../assets/logos/logo.svg';
import Article from '../../components/Article/Article';
import styled from 'styled-components';

function App() {
  const [theme, setTheme] = useState('dark');

  let themeHandler = () => {
    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }


  return (
    <Router>
      <div className='App'>
        <HeaderTheme theme={theme}>
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
        </HeaderTheme>
        <div className='theme-toggle-switch' onClick={() => themeHandler()}>
          <input type="checkbox" checked={(theme === 'light')} />
          <span class="theme-toggle-slider round"></span>
        </div>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/git">
            <Git></Git>
          </Route>
        </Switch>
        <Article theme={theme}></Article>
        <footer>
          <p>React starter kit @giri</p>
        </footer>
      </div>
    </Router>
  );
}


const HeaderTheme = styled.div`
    background-color: ${props => props.theme === 'light' ? "rgba(18, 76, 124, 0.87)" : "black"};
    transition-duration:1s;
`
export default App;
