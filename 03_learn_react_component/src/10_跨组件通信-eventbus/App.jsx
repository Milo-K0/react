import React, { Component } from "react";
import Home from "./Home";
import eventBus from "./event-bus";

export class App extends Component {
  componentDidMount() {
    eventBus.on("prevPage", this.bannerPrev.bind(this));
    eventBus.on("nextPage", this.bannerNext.bind(this));
  }
  componentWillUnmount() {
    eventBus.off("prevPage", this.bannerPrev.bind(this));
    eventBus.off("nextPage", this.bannerNext.bind(this));
  }
  bannerPrev(index) {
    console.log("跳转页面到第" + index + "页 上一页");
  }
  bannerNext(index) {
    console.log("跳转页面到第" + index + "页 下一页");
  }
  render() {
    return <Home />;
  }
}

export default App;
