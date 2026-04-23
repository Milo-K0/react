import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello world",
      counter: 100,
    };
  }
  // 使用方式一: 默认使用方式
  setMessage() {
    this.setState({
      message: "你好 世界",
    });
  }
  // 使用方式二: 回调函数的方式
  addCounter() {
    this.setState((state, props) => {
      // 好处一: 可以在这里处理一些逻辑
      // 好处二: 当前的回调函数会将之前的state和props传递进来
      const count = 1;
      return {
        message: props.name,
        counter: state.counter + count,
      };
    });
  }
  // 三: setState 在React事件处理中是一个异步事件
  render() {
    const { message, counter } = this.state;
    return (
      <div>
        <h2 onClick={(e) => this.setMessage()}>{message}</h2>
        <h2 onClick={(e) => this.addCounter()}>{counter}</h2>
      </div>
    );
  }
}

export default App;
