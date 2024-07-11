import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="App">
        <Navbar />
      </div>
      <div className="body">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;
