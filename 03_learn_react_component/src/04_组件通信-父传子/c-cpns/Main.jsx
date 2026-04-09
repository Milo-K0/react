import React, { Component } from "react";
import MainBanner from "./MainBanner";
import MainProductList from "./MainProductList";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      banners: [],
      productList: [],
    };
  }

  render() {
    const { banners, productList } = this.state;
    return (
      <div>
        <h3>Main</h3>
        <MainBanner banners={banners} />
        <MainProductList productList={productList} />
      </div>
    );
  }
}

export default Main;
