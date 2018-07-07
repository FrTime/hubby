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
        {/* line 12 will be the path for the main page/line 11 will be amended to splash */}
        <Route exact path="/Main" component={Main} />
      </Switch>
    </div>
  </Router>
);

export default App;
