import "./App.css";
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFoundRedirect from "./components/NotFoundRedirect";
import NotFound from "./components/NotFound";
function Navbar() {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/about">About Us </Link>
      <Link to="/something/that/should/work">Contact </Link>
    </div>
  );
}

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/something/that/should/work" component={Contact} />
        <Route path="/not-found" component={NotFound} />
        <Route component={NotFoundRedirect} />
      </Switch>
    </main>
  );
}

export default App;
