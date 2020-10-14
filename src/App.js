import React from 'react';
import './Styles/App.css';
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Checkout from './Components/Checkout'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* Checkout Page  */}
          <Route path="/checkout">
            <Header></Header>
            <Checkout />
          </Route>

          {/* Login Page  */}
          <Route path="/login">
            <p> Login </p>
          </Route>

          {/* Home Page  */}
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
