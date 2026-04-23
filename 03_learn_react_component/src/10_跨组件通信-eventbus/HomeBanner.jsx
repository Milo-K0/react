import React, { Component } from "react";
import eventBus from "./event-bus";

export class HomeBanner extends Component {
  prevPage() {
    eventBus.emit("prevPage", 10);
  }
  nextPage() {
    eventBus.emit("nextPage", 12);
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.prevPage()}>上一页</button>
        <button onClick={(e) => this.nextPage()}>下一页</button>
      </div>
    );
  }
}

export default HomeBanner;
