import "../styles/App.css";

import React, { Component } from "react";
import Board from "./Board";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="App flex justify-between">
          <SideBar />
          <div className="w-5/6 ml-3 mr-3">
            <div className="Header w-3/4  m-auto mt-3 rounded-md">
              Hội thảo khoa học Trường công nghệ thông tin và truyền thông
            </div>
            <Board />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
