import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch , Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
function Navbar() {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/about">About Us </Link>
      <Link to="/something/that/should/work">Contact </Link>
    </div>
  );
};

function App() {
  return (
    <main>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/something/that/should/work" component={Contact} />
      </Switch>
    </main>
  );
}

export default App;
