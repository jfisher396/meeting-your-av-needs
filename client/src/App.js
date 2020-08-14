import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Inventory from './pages/Inventory';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/inventory">
          <Inventory />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
