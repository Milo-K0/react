import React, { Component } from "react";
import TabBar from "./c-cpns/TabBar";

export class App extends Component {
  render() {
    return (
      <div>
        <TabBar>
          <button>按钮</button>
          <h2>标题</h2>
          <i>斜体字</i>
        </TabBar>
      </div>
    );
  }
}

export default App;
