import React, { Component } from "react";

export class RemCount extends Component {
  remCount(count) {
    this.props.changeCount(count)
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.remCount(-1)}>-1</button>
        <button onClick={(e) => this.remCount(-3)}>-3</button>
        <button onClick={(e) => this.remCount(-5)}>-5</button>
      </div>
    );
  }
}

export default RemCount;
