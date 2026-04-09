import React, { Component } from "react";
import ThemeContext from "../contexts/ThemeContext";

export class Home extends Component {
  render() {
    const { color, style } = this.context;
    return (
      <div>
        <h1>{color}</h1>
        <h2>{style}</h2>
      </div>
    );
  }
}

Home.contextType = ThemeContext;

export default Home;
