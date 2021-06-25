import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import ManageServices from "./Components/Dashboard/ManageServices/ManageServices";
import Orders from "./Components/Dashboard/Orders/Orders";
import Home from "./Components/Home/Home/Home";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import CheckOut from "./Components/Home/CheckOut/CheckOut";
import Login from "./Components/Login/Login/Login";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/manageServices">
            <ManageServices />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkOut/:id">
            <CheckOut />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
