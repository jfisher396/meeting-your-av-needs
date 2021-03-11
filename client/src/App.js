import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import CustomerInfoPage from "./pages/CustomerInfoPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
          <Route component={OrderPage} path="/order">
        </Route>
        <Route path="/customer-info">
          <CustomerInfoPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
