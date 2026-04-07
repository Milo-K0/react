import { Component } from "react";

class HelloWorld extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
    };
    console.log("Hello World Constructor");
  }
  componentDidMount() {
    console.log("Hello World componentDidMount");
  }
  componentDidUpdate() {
    console.log("Hello World componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Hello World componentWillUnmount");
  }
  changeMessage() {
    this.setState({
      message: "Hello React",
    });
  }
  render() {
    const { message } = this.state;
    console.log("Hello World Render");
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={() => this.changeMessage()}>更新数据</button>
      </div>
    );
  }
}

export default HelloWorld;
