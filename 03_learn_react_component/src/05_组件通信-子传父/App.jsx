import React, { Component } from "react";
import AddCount from "./c-cpns/AddCount";
import RemCount from "./c-cpns/RemCount";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 100,
    };
  }
  changeCount(count) {
    this.setState({
      counter: this.state.counter + count,
    });
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h3>{counter}</h3>
        <AddCount changeCount={(count) => this.changeCount(count)} />
        <RemCount changeCount={(count) => this.changeCount(count)} />
      </div>
    );
  }
}

export default App;
