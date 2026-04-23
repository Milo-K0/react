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

### 四. React组件化开发(一)

#### 1. React的组件化开发

组件化是React的核心思想，也是我们后续课程的重点，前面我们封装的App本身就是一个组件：

- 组件化提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的应用。
- 任何的应用都会被抽象成一颗组件树；

**组件化思想的应用**：

- 有了组件化的思想，我们在之后的开发中就要充分的利用它。
- 尽可能的将页面拆分成一个个小的、可复用的组件。
- 这样让我们的代码更加方便组织和管理，并且扩展性也更强。

**React组件分类：**

React的组件相对于Vue更加的灵活和多样，按照不同的方式可以分成很多类组件：

- 根据组件的**定义方式**，可以分为：函数组件(Functional Component）和类组件(ClassComponent)；
- 根据组件内部**是否有状态需要维护**，可以分成：无状态组件(StatelessComponent）和有状态组件(Stateful Component)；
- 根据组件的**不同职责**，可以分成：展示型组件(PresentationalComponent)和容器型组件(ContainerComponent)；

这些概念有很多重叠，但是他们最主要是关注数据逻辑和U展示的分离：

- 函数组件、无状态组件、展示型组件主要关注UI的展示；
- 类组件、有状态组件、容器型组件主要关注数据逻辑；

当然还有很多组件的其他概念：比如异步组件、高阶组件等，我们后续再学习。

**类组件**

类组件的定义有如下要求：

- 组件的名称是大写字符开头(无论类组件还是函数组件)
- 类组件需要继承自 React.Component
- 类组件必须实现render函数

在ES6之前，可以通过create-react-class模块来定义类组件，但是目前官网建议我们使用ES6的class类定义。

使用class定义一个组件：

- constructor是可选的，我们通常在constructor中初始化一些数据；
- this.state中维护的就是我们组件内部的数据；
- render() 方法是 class 组件中**唯一必须实现的方法**；

**render函数的返回值**

当render被调用时，它会检查 this.props和this.state的变化并返回以下类型之一：

- React元素:

  通常通过JSX创建。

  例如，`<div/>`会被React渲染为 DOM节点，`<MyComponent/>`会被 React渲染为自定义组件；

  无论是`<div/>`还是`<MyComponent />`均为React元素。

- 数组或fragments：使得render 方法可以返回多个元素。

- Portals：可以渲染子节点到不同的 DOM子树中。

- 字符串或数值类型：它们在 DOM 中会被渲染为文本节点

- 布尔类型或null：什么都不渲染。

**函数组件**

函数组件是使用function来进行定义的函数，只是这个函数会返回和类组件中render函数返回一样的内容。

函数组件有自己的特点(当然，后续到hooks，就不一样了)：

- 没有生命周期，也会被更新并挂载，但是没有生命周期函数；
- this 关键字不能指向组件实例(因为没有组件实例)；
- 没有内部状态(state)；

> 文件位置：03_learn_react_component\src\01_类组件和函数组件

#### 2. React组件生命周期

**认识生命周期**

很多的事务都有从创建到销毁的整个过程，这个过程称之为是生命周期；

React 组件也有自己的生命周期，了解组件的生命周期可以让我们在最合适的地方完成自己想要的功能；

**生命周期和生命周期函数的关系：**

**生命周期**是一个抽象的概念，在生命周期的整个过程，分成了很多个阶段；

- 比如装载阶段(Mount)，组件第一次在DOM树中被渲染的过程；
- 比如更新过程(Update)，组件状态发生变化，重新更新渲染的过程；
- 比如卸载过程(Unmount)，组件从DOM树中被移除的过程；

React内部为了告诉我们当前处于哪些阶段，会对我们组件内部实现的**某些函数进行回调**，这些函数就是**生命周期函数**：

- 比如实现componentDidMount函数：组件已经挂载到DOM上时，就会回调；
- 比如实现componentDidUpdate函数：组件已经发生了更新时，就会回调；
- 比如实现componentWillUnmount函数：组件即将被移除时，就会回调；
- 我们可以在这些回调函数中编写自己的逻辑代码，来完成自己的需求功能；

我们谈React生命周期时，主要谈的类的生命周期，是因为函数式组件是没有生命周期的；(后面我们可以通过hooks来模拟一些生命周期的回调)

**生命周期函数**

Constructor

- 如果不初始化 state 或不进行方法绑定，则不需要为React组件实现构造函数。

- constructor中通常只做两件事情：

  通过给this.state赋值对象来初始化内部的state;

  为事件绑定实例（this）；

componentDidMount

- componentDidMountO会在组件挂载后（插入DOM树中）立即调用。

- componentDidMount中通常进行哪里操作呢❓

  依赖于DOM的操作可以在这里进行；

  在此处发送网络请求就最好的地方；（官方建议）

  可以在此处添加一些订阅（会在componentWilIUnmount取消订阅）；

componentDidUpdate

- componentDidUpdateO会在更新后会被立即调用，首次渲染不会执行此方法。

  当组件更新后，可以在此处对DOM进行操作；

  如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求；（例如，当props 未发生变化时，则不会执行网络请求）。

componentWillUnmount

- componentWillUnmount(会在组件卸载及销毁之前直接调用。

  在此方法中执行必要的清理操作；

  例如，清除timer，取消网络请求或清除在componentDidMountO中创建的订阅等；

**不常用的生命周期**

- getDerivedStateFromProps：state 的值在任何时候都依赖于props时使用；该方法返回一个对象来更新state
- **getSnapshotBeforeUpdate**：在React更新DOM之前回调的一个函数，可以获取DOM更新前的一些信息(比如说滚动位置)；
- **shouldComponentUpdate**：该生命周期函数很常用，但是我们等待讲性能优化时再来看；

> 文件位置：03_learn_react_component\src\02_React的生命周期

#### 3. React组件间的通信

**认识组件的嵌套**

组件之间的嵌套关系

- 在之前的案例中，我们只是创建了一个组件App；
- 如果我们一个应用程序将所有的逻辑都放在一个组件中，那么这个组件就会变成非常的臃肿和难以维护；
- 所以组件化的核心思想应该是对组件进行拆分，拆分成一个个小的组件；
- 再将这些组件组合嵌套在一起，最终形成我们的应用程序；

上面的嵌套逻辑如下，它们存在如下关系：

- App组件是Header、Main、Footer组件的父组件；
- Main组件是Banner、ProductList组件的父组件；

**认识组件间的通信**

在开发过程中，我们会经常遇到需要组件之间相互进行通信：

- 比如App可能使用了多个Header，每个地方的Header展示的内容不同，那么我们就需要使用者传递给Header一些数据，让其进行展示;
- 又比如我们在Main中一次性请求了Banner数据和ProductList数据，那么就需要传递给他们来进行展示;
- 也可能是子组件中发生了事件，需要由父组件来完成某些操作，那就需要子组件向父组件传递事件;

总之，在一个React项目中，组件之间的通信是非常重要的环节；

父组件在展示子组件，可能会传递一些数据给子组件：

- 父组件通过 **属性=值**的形式来传递给子组件数据;
- 子组件通过**props**参数获取父组件传递过来的数据；

**父组件给子组件传递数据**

> 项目位置：03_learn_react_component\src\04_组件通信-父传子

**参数PropTypes**

对于传递给子组件的数据，有时候我们可能希望进行验证，特别是对于大型项目来说：

- 当然如果项目中默认继承了Flow或者TypeScript，那么直接就可以进行类型验证；
- 但是即使我们没有使用Flow或者TypeScript，也可以通过prop-types库进行参数验证；

从React v15.5 开始，React.PropTypes已移另个包中：prop-types库

如果没有传递，我们希望有默认值呢❓

- 我们使用defaultProps就可以了

**子组件传递父组件**

某些情况我们也需要子组件向父组件传递消息：

- 在vue中是通过自定义事件来完成的；
- 在React中同样是通过props传递消息，只是让父组件给子组件传递一个回调函数，在子组件中调用这个函数即可；

我们在这里完成一个案例：

- 将计数器案例进行拆解；
- 将按钮封装到子组件中：CounterButton；
- CounterButton发生点击事件，将内容传递到父组件中，修改counter的值；

文件位置：react\03_learn_react_component\src\05_组件通信-子传父

#### 4. React组件插槽用法

在开发中，我们抽离了一个组件，但是为了这个组件具备更强的通用性，我们不能将组件中的内容限制为固定的div、span等等这些元素。

我们应该让使用者可以决定某一块区域到底存放什么内容。

这种需求在Vue中有一个固定的做法是通过slot来完成的，React呢❓

React对于这种需要插槽的情况非常灵活，有两种方案可以实现：

- 组件的children子元素；
- props属性传递React元素；

#### 5. React非父子的通信

**Context应用场景**

非父子组件数据的共享：

- 在开发中，比较常见的数据传递方式是通过props属性自上而下(由父到子)进行传递。
- 但是对于有一些场景：比如一些数据需要在多个组件中进行共享(地区偏好、UI主题、用户登录状态、用户信息等)
- 如果我们在顶层的App中定义了这些信息，之后一层层传递下去，那么对于一些中间层不需要数据的组件来说，是一种冗余的操作。

但是，如果层级更高的话，一层层传递时是非常麻烦的，并且代码是非常冗余的：

- React 提供了一个API：Context；
- Context 提供了一种在组件之间共享此类值的方式，而不必显示地通过组件树的逐层传递 props；
- Context 设计目的是为了共享那些对于一个组件书而言是"全局"的数据，例如当前认证的用户、主题或首选语言；

**Context相关API**

React.createContext

- 创建一个需要共享的Context对象：
- 如果一个组件订阅了Context，那么这个组件就会从离自身最近的那个匹配的Provider中读取到当前的context值；
- defaultValue 是组件在顶层查找过程中没有找到对应的Provider，那么就使用默认值

Context.Provider

- 每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化：
- Provider 接收一个 value 属性，传递给消费组件；
- 一个 Provider 可以和多个消费组件有对应关系；
- 多个Provider 也可以嵌套使用，里层的会覆盖外层的数据；
- 当Provider 的value值发生变化时，它内部的所有消费组件都会被重新渲染；

Class.contextType

- 挂载在class上的contextType 属性会被重赋值为一个由React.createContext()创建的Context对象；
- 这样能让你使用 this.context 来消费最近 Context 上的那个值；
- 你可以在任何生命周期中访问到它，包括 render 函数中；

Context.Consumer

- 这里，React 组件也可以订阅到 context 变更。这样让你在 函数式组件 中完成订阅 context。
- 这里需要函数作为子元素(function as child) 这种做法；
- 这个函数接收当前的 context 值，返回一个React节点；

**Context 的基本使用**

什么时候使用默认值 defaultValue呢❓

- 当内部组件不在Context.Provider内部还需要获取默认赋值时

什么时候使用Context.Consumer呢❓

- 当使用value的组件是一个函数式组件时；
- 当组件中需要使用多个Context时；

#### 6. setState的使用详解

**为什么使用setState❓**

开发中我们并不能直接通过修改state的值来让界面发生更新：

- 因为我们修改了state之后，希望React根据最新的State来重新渲染界面，但是这种方式的修改React并不知道数据发生了变化；
- React并没有实现类似于Vue2中的Object.defineProperty或者Vue3中的Proxy的方式来监听数据的变化；
- 我们必须通过setState来告知React数据已经发生了变化；

疑惑：在组件中并没有实现setState的方法，为什么可以调用呢❓

- 原因很简单，setState方法是从Component中继承过来的。

#### 7. setState 异步更新

setState的更新是异步的❓

```jsx
class App extend React.Component {
    constructor() {
        super()
        this.state = {
            message: "hello world"
        }
    }
    changeMessage() {
        this.setState({
            message: '你好世界'
        })
        console.log(this.state)
    }
    render() {
        const {message} = this.state
        return (
        	<div>
                <h1 onClick= {e => this.changeMessage()}>
                	{message}
                </h1>
            </div>)
    }
}
```

- 最终打印结果是hello world；
- 可见setState是异步的操作，我们并不能在执行完setState之后立马拿到最新的state的结果；

为什么setState设计为异步呢❓

- setState设计为异步，可以**显著提升性能**；

  如果每次调用 setState 都进行一次更新，那么意味着 render 函数会被频繁调用，界面重新渲染，这样效率是很低的；

  最好的办法应该是获取到多个更新，之后进行批量更新；

- 如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步；

  state和props不能保持一致性，会在开发中产生很多的问题；

那么如何获取更新后的值呢❓

- 方式一：setState 的回调

  setState 接受两个参数: 第二个参数是一个回调函数，这个回调函数在更新后会执行；

  格式如下: setState(partialState, callback)

  ```jsx
  ##changeText() {
      this.setState({
          message: "你好啊，李银河"
      }, () => {
          console.log(this.state.message)
      })
  }
  ```

- 我们也可以在生命周期函数中获取:

  ```jsx
  componentDidUpdate(prevProps, provState, snapshot) {
  	console.log(this.state.message)
  }
  ```

setState一定是异步吗❓

react18之前，分两种情况

- 在组件生命周期或React合成事件中，setState是异步；
- 在setTimeout或者原生dom事件中，setState是同步；

react18之后，默认都放到批处理中(异步)

### 五. React组件化开发(二)

#### 1. React性能优化SCU

**React更新机制**

react的渲染流程

jsx -> 虚拟DOM -> 真实DOM

React的更新流程

- props/state改变 -> render函数重新执行 -> 产生新的DOM树 -> 新旧DOM树进行diff -> 计算出差异进行更新 -> 更新到真实的DOM

- 如果一棵树参考另外一棵树进行完全比较更新，那么即使是最先进的算法，该算法的复杂程度为O(n²)，其中n是树中元素的数量；

- 如果在React中使用了该算法，那么展示1000个元素所需要执行的计算量将在十亿的量级范围；
- 这个开销太过昂贵了，React的更新性能会变得非常低效；

**React对这个算法进行了优化，将其优化成了O(n)，如何优化的呢❓**

- 同层节点之间相互比较，不会跨节点比较；
- 不同类型的节点，产生不同的树结构；
- 开发中，可以通过key来指定哪些节点在不同的渲染下保持稳定；

**key的优化**(不同情况下使用key)

- 方式一：在最后位置插入数据

  这种情况，有无key意义并不大

- 方式二：在前面插入数据

  这种做法，在没有key的情况下，所有的li都需要进行修改；

- 当子元素拥有key 时，React 使用key 来匹配原有树上的子元素以及最新树上的子元素：

  在下面这种场景下，key为111和222的元素仅仅进行位移，不需要进行任何的修改；

  将key为333的元素插入到最前面的位置即可；

- key的注意事项：

  key应该是唯一的；

  key不要使用随机数（随机数在下一次render时，会重新生成一个数字）；

  使用index作为key，对性能是没有优化的；

**render函数被调用**

我们使用之前的一个嵌套案例：

- 在App中，我们增加了一个计数器的代码；
- 当点击 +1 时，会重新调用App的render函数；
- 而当App的render函数被重新调用时，所有的子组件的render函数都会被重新调用；

那么我们可以思考一下，在以后的开发中，我们只要是修改了App中的数据，所有的组件都需要重新render，进行diff算法，性能必然是很低的：

- 事实上，很多的组件没有必要重新render；
- 它们调用render应该有一个前提，就是依赖的数据(state、props)发生改变时，再调用自己的render方法；

如何控制render方法是否被调用呢❓

- 通过shouldComponentUpdate方法即可；

**shouldComponentUpdate**

React给我们提供了一个生命周期方法 shouldComponentUpdate（很多时候，我们简称SCU），这个方法接受参数，并且需要有返回值：

该方法有两个参数：

- 参数一：**nextProps** 修改之后，最新的props属性
- 参数二：**nextState** 修改之后，最新的state属性

该方法返回值是一个boolean类型：

- 返回值为true，那么就需要调用render方法
- 返回值为false，那么就不需要调用render方法
- 默认返回的是true，也就是只要state发生改变，就会调用render方法；

比如我们在App中增加一个message属性：

- jsx中并没有依赖这个message，那么它的改变不应该引起重新渲染；
- 但是因为render监听到state的变化，就会重新render，所以最后render方法还是被重新调用了；

**PureComponent**

如果所有的类，我们都需要手动来实现 shouldComponentUpdate，那么会给我们开发者增加非常多的工作量。

- 我们来设想一下 shouldComponentUpdate 中的各种判断的目的是什么❓
- props或者state 中的数据是否发生了改变，来决定shouldComponentUpdate返回true或者false；

事实上React已经考虑到了这一点，所以React已经默认帮我们实现好了，如何实现呢❓

- 将class继承自PureComponent

**shallowEqual方法**

这个方法中，调用!shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)，这个shallowEqual就是进行浅层比较

**高阶组件 memo**

目前我们是针对组件可以使用PureComponent，那么函数式组件呢❓

- 事实上函数式组件我们在props没有改变时，也是不希望其重新渲染其DOM树结构的

我们需要使用一个高阶组件memo：

- 我们将之前的Header、Banner、ProductList都通过memo函数进行一层包裹；
- Footer没有使用memo函数进行包裹；
- 最终的效果是，当counter发生改变时，Header、Banner、ProductList的函数不会重新执行；
- 而Footer的函数会重新执行；

**不可变数据的力量**

案例位置：react\03_learn_react_component\src\13_数据不可变的力量\App.jsx

#### 2. 获取DOM方式refs

#### 3. 受控和非受控组件

#### 4. React的高阶组件

#### 5. portals和fragment

#### 6. StrictMode严格模式
