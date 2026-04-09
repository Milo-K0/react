import React, { Component } from "react";
import ThemeContext from "../contexts/ThemeContext";

export class Item extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => <div>{value.color}</div>}
      </ThemeContext.Consumer>
    );
  }
}

export default Item;
