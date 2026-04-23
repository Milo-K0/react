import React, { PureComponent } from "react";

export class Home extends PureComponent {
  render() {
    console.log("home render");
    const { message } = this.props;
    return <div>Home-view-{message}</div>;
  }
}

export default Home;
