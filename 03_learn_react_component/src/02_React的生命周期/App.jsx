import { Component } from "react";
import HelloWorld from "./HelloWorld";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ifShowHelloWorld: true,
    };
  }
  changeState() {
    this.setState({
      ifShowHelloWorld: !this.state.ifShowHelloWorld,
    });
  }
  render() {
    const { ifShowHelloWorld } = this.state;
    return (
      <div>
        <button onClick={(e) => this.changeState()}>是否展示</button>
        {ifShowHelloWorld && <HelloWorld />}
      </div>
    );
  }
}

export default App;
