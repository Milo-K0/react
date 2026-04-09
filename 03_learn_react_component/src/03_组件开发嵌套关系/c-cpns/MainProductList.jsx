import React, { Component } from "react";

export class MainProductList extends Component {
  render() {
    const { productList } = this.props;
    return (
      <div>
        <h4>productList</h4>
        {productList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
    );
  }
}

export default MainProductList;
