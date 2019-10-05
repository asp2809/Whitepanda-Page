import React from "react";
import { Redirect } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import bindNavs from "./components/hocs/bindNavs";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={bindNavs(Home)} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
