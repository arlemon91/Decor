import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Room from "./pages/AddRoom";
import Detail from "./pages/Detail";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/decors"></Route>
          <Route exact path="/create">
            <Room />
          </Route>
          <Route exact path="/update">
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
