import React, { PureComponent, memo } from "react";
import Home from "./Home";
import Commend from "./Commend";

const Section = memo(function Section() {
  return (
    <div>
      <h2>Section Page</h2>
    </div>
  );
});

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
      counter: 100,
    };
  }
  changeMessage() {
    this.setState({
      message: "变化无限大",
    });
  }
  addCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  shouldComponentUpdate(nextProps, newState) {
    if (newState.message !== this.state.message) return true;
    return false;
  }
  render() {
    console.log("App render");
    const { message, counter } = this.state;
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={(e) => this.changeMessage()}>切换文字</button>
        <h2>{counter}</h2>
        <button onClick={(e) => this.addCounter()}>增加数字</button>
        <Home message={message} />
        <Commend counter={counter} />
        <Section />
      </div>
    );
  }
}

export default App;
