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

  文件：01*react_learn_basic\01_react初体验\04*案例-电影列表.html

- 计数器

  文件：01*react_learn_basic\01_react初体验\05*案例-计数器.html

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

如果原生DOM原生有一个监听事件，我们可以如何操作呢❓

- 方式一：获取DOM原生，添加监听事件；
- 方式二：在HTML原生中，直接绑定onclick；

**在React中是如何操作呢❓**我们来实现一下React中的事件监听，这里主要有两点不同

- React事件的命名采用**小驼峰式(camelCase)**，而不是纯小写；
- 我们需要**通过{}传入一个事件处理函数**，这个函数会在事件发生时被执行；

**this的绑定问题**

在事件执行后，我们可能需要获取当前类的对象中相关的属性，这个时候需要用到this

- 如果我们这里直接打印this，也会发现它是一个undefined

为什么是undefined呢❓

- 原因是btnClick函数并不是我们主动调用的，而恳当button发生改变时，React内部调用了btnClick函数；
- 而它内部调用时，并不知道要如何绑定正确的this；

如何解决this的问题呢❓

- **方案一：**bind给btnClick显示绑定this
- **方案二：**使用ES6 class fields语法
- **方案三：**事件监听时传入箭头函数（推荐）

#### 4. JSX的条件渲染

某些情况下，界面的内容会根据不同的情况显示不同的内容，或者决定是否渲染某部分内容：

- 在vue中，我们会通过指令来控制：比如v-if、v-show；
- 在React中，所有的条件判断都和普通的JavaScript代码一致；

常见的条件渲染的方式有哪些呢❓

- 方式一：条件判断语句

  适合逻辑较多的情况

- 方式二：三元运算符

  适合逻辑比较简单

- 方式三：与运算符&&

  适合如果条件成立，渲染某一个组件；如果条件不成立，什么内容也不渲染;

- v-show的效果

  主要是控制display属性是否为none

#### 5. JSX的列表渲染

真实开发中我们会从服务器请求到大量的数据，数据会以列表的形式存储：

- 比如歌曲、歌手、排行榜列表的数据；
- 比如商品、购物车、评论列表的数据；
- 比如好友消息、动态、联系人列表的数据；

在React中并没有像Vue模块语法中的v-for指令，而且需要我们通过JavaScript代码的方式组织数据，转成JSX：

- 从Vue转型到React可能会不习惯，认为Vue的方式更加的简洁明了；
- 但是React中的JSX正是因为和JavaScript无缝的衔接，让它可以更加的灵活；

如何展示列表呢❓

- 在React中，展示列表最多的方式就是使用数组的**map高阶函数**；

很多时候我们在展示一个数组中的数据之前，需要先对它进行一些处理：

- 比如过滤掉一些内容：filter函数
- 比如截取数组中的一部分内容：**slice函数**

列表中的key

- 我们发现代码中只要展示列表都会报一个警告：

  Waring: Each child in a list should have a unique "key" prop.

- 这个警告是告诉我们需要在列表展示的JSX中添加一个key

  key主要的作用是为了提高diff算法时的效率；

  这个我们在后续内容中再进行讲解；

####  6. JSX的原理和本质

**JSX的本质**

实际上，jsx 仅仅只是 React.createElement(component， props，..children)函数的语法糖。

- 所有的jsx最终都会被转换成**React.createElement**的函数调用。

createElement需要传递三个参数：

- 参数一：type

  当前ReactElement的类型；

  如果是标签元素，那么就使用字符串表示“div”；

  如果是组件元素，那么就直接使用组件的名称；

- 参数二：config

  所有jsx中的属性都在config中以对象的属性和值的形式存储;

  比如传入className作为元素的class；

- 参数三：children

  存放在标签中的内容，以children数组的方式进行存储；

**虚拟DOM的创建过程**

我们通过React.createElement最终创建出来一个ReactElement对象：

```javascript
return ReactElement(
	type,
    key,
    ref,
    self,
    source,
    ReactCurrentOwner.current,
    props,
);
```

这个ReactElement对象是什么作用呢？React为什么要创建它呢❓

- 原因是React利用ReactElement对象组成了一个**JavaScript的对象树**；
- JavaScript的对象树就是虚拟DOM（Virtual DOM）；

如何查看ReactElement的树结构呢❓

- 我们可以将之前的jsx返回结果进行打印；

而ReactElement最终形成的树结构就是**VirtualDOM**；

**声明式编程**

虚拟DOM帮助我们从命令式编程转到了声明式编程的模式

React官方的说法：VirtualDOM是一种编程理念。

- 在这个理念中，U以一种理想化或者说虚拟化的方式保存在内存中，并且它是一个相对简单的JavaScript对象
- 我们可以通过ReactDOM.render让虚拟DOM和真实DOM同步起来，这个过程中叫做协调（Reconciliation）；

这种编程的方式赋予了React声明式的API：

- 你只需要告诉React希望让UI是什么状态；
- React来确保DOM和这些状态是匹配的；
- 你不需要直接进行DOM操作，就可以从手动更改DOM、属性操作、事件处理中解放出来；

### 三. React脚手架

#### 1. 认识脚手架工具

**前端工程的复杂化**

如果我们只是开发几个小的demo程序，那么永远不需要考虑一些复杂的问题：

- 比如目录结构如何组织划分；
- 比如如何管理文件之间的相互依赖；
- 比如如何管理第三方模块的依赖；
- 比如项目发布前如何压缩、打包项目；
- 等等...

现代的前端项目已经越来越复杂了：

- 不会再是在HTML中引入几个css文件，引入几个编写的js文件或者第三方的js文件这么简单；
- 比如css可能是使用less、sass等预处理器进行编写，我们需要将它们转成普通的css才能被浏览器解析；
- 比如JavaScript代码不再只是编写在几个文件中，而是通过模块化的方式，被组成在**成百上干**个文件中，我们需要通过模块化的技术来管理它们之间的相互依赖；
- 比如项目需要依赖很多的第三方库，如何更好的管理它们（比如管理它们的依赖、版本升级等）；

为了解决上面这些问题，我们需要再去学习一些工具：

- 比如babel、webpack、gulp，配置它们转换规则、打包依赖、热更新等等一些的内容；
- 脚手架的出现，就是帮助我们解决这一系列问题的；

**脚手架是什么❓**

传统的脚手架指的是建筑学的一种结构：在搭建楼房、建筑物时，临时搭建出来的一个框架；

编程中提到的脚手架（Scaffold），其实是一种工具，帮我们可以快速生成项目的工程化结构；

- 每个项目作出完成的效果不同，但是它们的**基本工程化结构**是相似的；
- 既然相似，就没有必要每次都**从零开始搭建**，完全可以**使用一些工具**，帮助我们生产基本的工程化模板；
- 不同的项目，在这个模板的基础之上进行项目开发或者进行一些配置的简单修改即可；
- 这样也可以间接保证项目的基本机构一致性，方便后期的维护；

总结：脚手架让项目从搭建到开发，再到部署，整个流程变得快速和便捷；

#### 2. create-react-app

对于现在比较流行的三大框架都有属于自己的脚手架：

- Vue的脚手架：@vue/cli
- Angular的脚手架：@angular/cli
- React的脚手架：create-react-app

它们的作用都是帮助我们生成一个通用的目录结构，并且已经将我们所需的工程环境配置好。



使用这些脚手架需要依赖什么呢❓

- 目前这些脚手架都是使用node编写的，并且都是基于webpack的；
- 所以我们必须在自己的电脑上安装node环境；

这里我们主要是学习React，所以我们以React的脚手架工具：create-react-app作为讲解；

#### 3. 创建React项目

现在，我们就可以通过脚手架来创建React项目了。

创建React项目的命令如下：

- 注意：项目名称**不能包含大写字母**
- 另外还有更多创建项目的方式，可以参考GitHub的readme

```bash
create-react-app 项目名称
```

创建完成后，进入对应的目录，就可以将项目跑起来：

```bash
cd 01-test-react
yarn start
```

**认识PWA**

整个目录结构都常好理解，只是有一个PWA相关的概念：

- PWA全称 Progressive Web App，即渐进式WEB应用；
- 一个PWA应用首先是一个网页，可以通过Web技术编写出一个网页应用；
- 随后添加上App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能；
- 这种Web存在的形式，我们也称之为是 Web App；

PWA解决了哪些问题呢❓

- 可以添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏；
- 实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能；
- 实现了消息推送；
- 等等一系列类似于Native App相关的功能；

#### 4. webpack的配置

见 react-scripts

或 执行 eject 命令弹出配置

#### 5. 从零编写代码

文件位置：02_learn_scaffold
