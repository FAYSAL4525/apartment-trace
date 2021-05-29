import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import ApartmentDetail from "./apartmentDetail/ApartmentDetail";
import Home from "./home/Home";

const Main = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/apartment/:id">
            <ApartmentDetail />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Main;
