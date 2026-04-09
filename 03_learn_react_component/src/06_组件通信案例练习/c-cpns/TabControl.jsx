import React, { Component } from "react";

export class TabControl extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };
  }
  changeCurrentIndex(index) {
    this.setState({
      currentIndex: index,
    });
    this.props.setCurrentIndex(index);
  }
  render() {
    const { currentIndex } = this.state;
    return (
      <div className="app">
        {this.props.titles.map((title, index) => (
          <div
            onClick={(e) => this.changeCurrentIndex(index)}
            className={`item ${index === currentIndex ? "active" : ""}`}
          >
            <span className="text">{title}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default TabControl;
