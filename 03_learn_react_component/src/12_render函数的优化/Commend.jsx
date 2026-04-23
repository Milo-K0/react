import React, { PureComponent } from "react";

export class Commend extends PureComponent {
  render() {
    console.log("commend render")
    const { counter } = this.props;
    return <div>Commend-view-{counter}</div>;
  }
}

export default Commend;
