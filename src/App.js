import React from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="App">
      <p>Hi Ronald !</p>

      <Header />
      <div className="app__body">
        <SideBar />
      </div>

      {/* // react-router ---> chat screen */}
    </div>
  );
}

export default App;
