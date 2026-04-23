import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      movies: [
        { name: "喜羊羊与灰太狼", price: 200 },
        { name: "熊出没", price: 100 },
        { name: "中华小厨神", price: 50 },
      ],
    };
  }
  addMovie() {
    // 数据不可变!!!
    const movies = [...this.state.movies];
    movies.push({
      name: "超兽武装",
      price: 250,
    });
    this.setState({
      movies,
    });
  }
  render() {
    const { movies } = this.state;
    return (
      <div>
        {movies.map((item, index) => {
          return (
            <h5 key={index}>
              name: {item.name}, price: {item.price}
            </h5>
          );
        })}
        <button onClick={(e) => this.addMovie()}>增加电影</button>
      </div>
    );
  }
}

export default App;
