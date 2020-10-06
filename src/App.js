import React from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat.js";

function App() {
  return (
    <div className="App">
      <Router>
        <p>Hi Ronald !</p>
        <Header />

        <div className="app__body">
          <SideBar />

          <Switch>
            <Route path="/room/:roomId">
              <h1>Chat Screen</h1>
              <Chat />
            </Route>
            <Route path="/">
              <h1> Welcome the pathhouse!!</h1>
            </Route>
          </Switch>
          {/* // react-router ---> chat screen */}
        </div>
      </Router>
    </div>
  );
}

export default App;
