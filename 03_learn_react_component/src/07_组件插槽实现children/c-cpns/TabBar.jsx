import React, { Component } from "react";

export class TabBar extends Component {
  render() {
    const { children } = this.props;
    return <div>{children.map((item) => item)}</div>;
  }
}

export default TabBar;
