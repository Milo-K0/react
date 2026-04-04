## React

> 用于构建 Web 和原生交互界面的库

### 一. 邂逅React

#### 1. React的介绍和特点

**React是什么❓**

- React: 用于构建用户界面的JavaScript 库;
- React的官网文档: https://zh-hans.reactjs.org/

**React的特点❓**

1. 声明式编程
   - 声明式编程是目前**整个大前端开发的模式**：Vue、React、Flutter、SwiftUl;
   - 它允许我们只需要维护自己的状态，当状态改变时，React可以根据最新的状态去渲染我们的UI界面；
2. 组件化开发
   - 组件化开发页面目前前端的流行趋势，我们会将复杂的界面拆分成一个个小的组件；
   - 其中的重点之一是**合理的进行组件的划分和设计**；
3. 多平台适配
   - 2013年，React发布之初主要是开发Web页面；
   - 2015年，Facebook推出了ReactNative，用于开发移动端跨平台；（虽然目前Flutter非常火爆，但是还是有很多公司在使用ReactNative) ;
   - 2017年，Facebook推出ReactVR，用于开发虚拟现实Web应用程序；（VR也会是一个火爆的应用场景）；

#### 2. Hello React案例

> hello world -> hello React

文件：01_react_learn_basic\01_react初体验\02_hello_react案例.html

#### 3. React开发依赖分析

开发React**必须**依赖三个库：

- **react**：包含react所必须的核心代码
- **react-dom**：react渲染在不同平台所需要的核心代码
- **babel**：将jsx转换为React代码的工具

为何Vue可以只依赖一个包，而React需要这么多❓

- 其实，React这三个库是**各司其职**的，目的是**让每一个库只单纯做自己的事情**；

- 在React的0.14版本之前是**没有react-dom这个概念的**，所有功能都包含在react里；

- 需要拆分的根本原因是因为react-native，react包中包含了react web 和 react-native所共同拥有的**核心代码**。

- react-dom针对web 和 native 所完成的事情不同:

  web端：react-dom会将jsx最终渲染成真实的DOM，显示在浏览器中。

  native端：react-dom会将jsx最终渲染成原生的控件(比如Android中的Button，IOS中的UIButton)。

babel是什么❓

- Babel ，又名 Babel.js。
- 是目前前端使用非常广泛的编译器、转移器。
- 比如当下**很多浏览器并不支持ES6的语法**，但是确实ES6的语法非常的简洁和方便，我们**开发时**希望使用它。
- 那么编写源码时我们就可以使用ES6来编写，之后通过Babel工具，将ES6**转成**大多数浏览器都支持的ES5的语法。

React和Babel的关系：

- 默认情况下开发React其实可以不使用babel。
- 但是前提是我们自已使用React.createElement来编写源代码，它编写的代码非常的繁琐和可读性差。
- 那么我们就可以直接编写jsx（JavaScript XML）的语法，并且让babel帮助我们转换成React.createElement。

#### 4. React组件化的封装

**整个逻辑可以看作一个整体，那么我们就可以将其封装成一个组件：**

- 我们说过**root.render参数**是一个**HTML元素或者一个组件**；
- 所以我们可以将之前的业务逻辑封装到**一个组件**中，然后传入到ReactDOM.render 函数中的第一个参数；

在React中，如何封装一个组件呢❓这里我们暂时使用**类的方式**封装组件：

- **定义一个类**(类名大写，组件的名称必须是大写的，小写会被认为是HTML元素)，继承自React.Component

- 实现当前组件的render函数

  render当中返回的jsx内容，就是之后React会帮助我们渲染的内容

#### 5. React数据事件处理

**数据依赖**

组件化问题一：数据在哪里定义❓

在组件中的数据，我们可以分成两类：

- 参与界面更新的数据：当数据变化时，需要更新组件渲染的内容；
- 不参与界面更新的数据：当数据变化时，不需要更新组件渲染的内容；

参与界面更新的数据我们也可以称之为**参与数据流**，这个数据是**定义在当前对象的state**中

- 我们可以通过在**构造函数中 this.state = {定义的数据}**

- 当我们的数据发生变化时，我们可以调用 this.setState 来更新数据，并且通知React进行update操作；

  在进行update操作时，就会重新调用render函数，并且使用最新的数据，来渲染界面

**事件绑定**

组件化问题二：事件绑定中的this

- 在类中直接定义一个函数，并且将这个函数绑定到**元素的onClick事件**上，当前这个函数的this指向的是谁呢❓

默认情况下是undefined

- 很奇怪，居然是**undefined**

- 因为在正常的DOM操作中，监听点击，监听函数中的this其实是节点对象(比如说是button对象)；
- 这次因为React并不是直接渲染成真正的DOM，我们所编写的button只是一个语法糖，它的本质React的Element对象；
- 那么在这里发生监听的时候，react在执行函数时并没有绑定this，默认情况下就是一个undefined；

我们在绑定的函数中，可能想要使用当前对象，比如执行this.setState 函数，就必须拿到当前对象的this

- 我们就需要在传入函数时，给这个函数直接绑定this
- 类似于下面的写法：`<button onClick={this.changeText.bind(this)}>改变文本</button>`

文件：01_react_learn_basic\01_react初体验\03_hello_react重构.html

#### 6. React其他案例实现

- 电影列表

  文件：01_react_learn_basic\01_react初体验\04_案例-电影列表.html

- 计数器

  文件：01_react_learn_basic\01_react初体验\05_案例-计数器.html

### 二. React基础-JSX语法

#### 1. 认识JSX语法

```javascript
render() {
    const { message } = this.state;
    const element = <h2>{message}</h2>;
    return element;
}
```

**这段element变量的声明右侧赋值的标签语法是什么呢❓**

- 它不是一段字符串（因为没有使用引号包裹）；
- 它看起来是一段HTML元素，但是我们能在js中直接给一个变量赋值html吗？
- 其实是不可以的，如果我们将type="text/babel"去除掉，那么就会出现语法错误；
- 它到底是什么呢？其实它是一段**jsx的语法**；

**JSX是什么❓**

- JSX是一种JavaScript的语法扩展（extension），也在很多地方称之为JavaScriptXML，因为看起就是一段XML语法；
- 它用于描述我们的UI界面，并且其完成可以和JavaScript融合在一起使用；
- 它不同于Vue中的模块语法，你不需要专门学习模块语法中的一些指令(比如v-for、v-if、v-else、v-bind) ;

**为什么React选择了JSX语法❓**

React认为**渲染逻辑**本质上与**其他Ui逻辑**存在内在耦合

- 比如UI需要**绑定事件**（button、a原生等等）;
- 比如UI中需要**展示数据状态**；
- 比如在某些状态发生改变时，又需要改变UI；

他们之间是密不可分，所以React没有将标记分离到不同的文件中，而是将它们组合到了一起，这个地方就是组件（Component）;

在这里，我们只需要知道，JSX其实是嵌入到JavaScript中的一种结构语法；

#### 2. JSX的基本使用

**JSX的书写规范：**

- JSX的顶层只能有一个根元素，所以我们很多时候会在外层包裹一个div元素（或者使用后面我们学习的Fragment）；

- 为了方便阅读，我们通常在jsx的外层包裹一个小括号O，这样可以方便阅读，并且jsx可以进行换行书写；

- JSX中的标签可以是单标签，也可以是双标签；

  注意：如果是单标签，必须以>结尾；

**JSX的注释写法：**

```javascript
render() {
    const { message } = this.state;
    return (
        <div>
        {/* JSX注释 */}
        <h2>{message}</h2>
        </div>
    );
}
```

**JSX嵌入变量作为子元素**

- 情况一：当变量是Number、String、Array类型时，可以直接显示
- 情况二：当变量是null、undefined、Boolean类型时，内容为空；
  - 如果希望可以显示null、undefined、Boolean，那么需要转成字符串;
  - 转换的方式有很多，比如toString方法、和空字符串拼接，String（变量）等方式；
- 情况三：Object对象类型不能作为子元素（not valid as a React child）；

**JSX嵌入表达式**

- 运算表达式
- 三元运算符
- 执行一个函数

**JSX绑定属性**

- 比如元素都会有title属性
- 比如img元素会有src属性
- 比如a元素会有href属性
- 比如元素可能需要绑定class
- 比如原生使用内联样式style

```javascript
const root = ReactDOM.createRoot(document.querySelector("#root"));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
      title: "测试title",
      href: "https://www.baidu.com",
      isActive: true,
    };
  }
  render() {
    const { message, title, href, isActive } = this.state;
    // 绑定方式一
    // const className = `aaa bbb ${isActive ? "ccc" : ""}`
    // 绑定方式二
    const className = ["aaa", "bbb"];
    // 绑定方式三：classnames 第三方库
    if (isActive) className.push("ccc");
    return (
      <div>
        {/* 基本绑定 */}
        <h2 title={title}>{message}</h2>
        <a href={href}>百度一下</a>
        {/* class绑定方式 最好使用className */}
        <div className={className.join(" ")}>233</div>
        {/* style绑定方式 对象绑定 */}
        <h2 style={{ color: "red" }}>233333</h2>
      </div>
    );
  }
}
```



#### 3. JSX的事件绑定

#### 4. JSX的条件渲染

#### 5. JSX的列表渲染

#### 6. JSX的原理和本质