import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Splash from "./pages/Splash";
import LoginHandler from "./pages/LoginHandler";
import Register from "./components/Register";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/login" component={LoginHandler} />
        <Route exact path="/register" component={Register} />
      
        <Route path="/Main/:id" component={Main} />
      </Switch>
    </div>
  </Router>
);

export default App;
