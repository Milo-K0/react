import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="left">{this.props.leftContent}</div>
        <div className="right">{this.props.rightContent}</div>
      </div>
    );
  }
}

export default Home;
