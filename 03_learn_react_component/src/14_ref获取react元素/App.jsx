import React, { createRef, PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super()
    this.h2Ref = createRef()
    this.h3Ref = null
  }
  getRef() {
    // 方式一: 提前创建好ref对象
    console.log(this.h2Ref.current);
    // 方式三：函数回调赋值
    console.log(this.h3Ref)
  }
  render() {
    return (
      <div>
        <h2 ref={this.h2Ref}>我是h2ref元素</h2>
        <h3 ref={el => this.h3Ref = el}>我是h3ref元素</h3>
        <button onClick={(e) => this.getRef()}>获取ref元素</button>
      </div>
    );
  }
}

export default App;
