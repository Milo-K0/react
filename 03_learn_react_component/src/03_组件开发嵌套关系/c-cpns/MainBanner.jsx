import React, { Component } from "react";
import PropTypes from "prop-types";

export class MainBanner extends Component {
  render() {
    const { banners } = this.props;
    return (
      <div>
        <h4>轮播图</h4>
        <ul>
          {banners.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

MainBanner.protoTypes = {
  banners: PropTypes.array,
};
MainBanner.defaultProps = {
  banners: [],
};

export default MainBanner;
