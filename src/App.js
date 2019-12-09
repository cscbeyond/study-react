import React, { Component } from "react";

/*
函数式定义组件
function App() {
  return (
    <div className="App">
     hello world
    </div>
  );
}
*/
// 这样也可以
// class App extends React.Component { // 这样也可以
class App extends Component {
  render() {
    return <div className="App">hello, geek chen</div>;
  }
}

export default App;
