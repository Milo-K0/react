import React, { Component } from "react";
import TabControl from "./c-cpns/TabControl";
import "./style.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      titles: ["流行", "通用", "经典"],
      currentIndex: 0,
    };
  }
  setCurrentIndex(index) {
    this.setState({
      currentIndex: index,
    });
  }
  render() {
    const { titles, currentIndex } = this.state;
    return (
      <div>
        <TabControl
          setCurrentIndex={(index) => this.setCurrentIndex(index)}
          titles={titles}
        />
        <h1>{titles[currentIndex]}</h1>
      </div>
    );
  }
}

export default App;
