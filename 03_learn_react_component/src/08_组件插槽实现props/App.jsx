import React, { Component } from "react";
import Home from "./c-cpns/Home";

export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const leftContent = <div>左半部分</div>;
    const rightContent = <div>有半部分</div>;
    return <Home leftContent={leftContent} rightContent={rightContent} />;
  }
}

export default App;
