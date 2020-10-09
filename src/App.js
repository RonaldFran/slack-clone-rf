import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat.js";
import Login from "./Login";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Router>
            <Header />
            <div className="app__body">
              <SideBar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1> Welcome the pathhouse!!</h1>
                </Route>
              </Switch>
              {/* // react-router ---> chat screen */}
            </div>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
