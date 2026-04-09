import React, { Component } from "react";
import ThemeContext from "./contexts/ThemeContext";
import Home from "./c-cpns/Home";
import Item from "./c-cpns/Item";

export class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value={{ color: "red", style: "light" }}>
        <Home />
        <Item />
      </ThemeContext.Provider>
    );
  }
}

export default App;
