import React from 'react';
import FoodControl from './Foods/FoodControl';
import Header from './Header';
import Footer from './Footer';
import Signin from "./Auth/Signin";
import Signup from './Auth/Signup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
        <div id="spacing">
          <FoodControl />
        </div>
        <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
