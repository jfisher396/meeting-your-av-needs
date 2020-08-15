import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Inventory from './pages/Inventory';
import Order from './pages/Order';
import EnterInfo from './pages/EnterInfo';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/inventory">
          <Inventory />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/customer-info">
          <EnterInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
