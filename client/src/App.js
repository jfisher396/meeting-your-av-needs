import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Order from './pages/Order';
import EnterInfo from './pages/EnterInfo';
import Footer from './components/Footer'

function App(props) {
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route component = {Order} path="/order"/>
          {/* <Order />
        </Route> */}
        <Route path="/customer-info">
          <EnterInfo />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
