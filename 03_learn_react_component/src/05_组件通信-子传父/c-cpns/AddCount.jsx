import React, { Component } from "react";

export class AddCount extends Component {
  addCount(count) {
    this.props.changeCount(count);
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.addCount(1)}>+1</button>
        <button onClick={(e) => this.addCount(3)}>+3</button>
        <button onClick={(e) => this.addCount(5)}>+5</button>
      </div>
    );
  }
}

export default AddCount;
