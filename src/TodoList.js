import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./style.css";
class TodoList extends Component {
  constructor(props) {
    // 最先执行的函数
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDel = this.handleItemDel.bind(this);

    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: "",
      list: []
    };
  }

  render() {
    return (
      <Fragment>
        {/*内容*/}
        {
          // 单行注释
        }
        <label htmlFor="insertArea">输入内容: </label>
        <input
          className="input"
          id="insertArea"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleBtnClick}> 提交 </button>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, idx) => {
      return (
        <TodoItem
          content={item}
          idx={idx}
          key={idx} 
          deleteItem={this.handleItemDel}
        />
      );
    });
  }

  handleInputChange(e) {
    // let inputValue = e.target.value;
    // this.setState({
    //   inputValue
    // });
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }
  handleBtnClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }));
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue]
    // });
    // this.setState({
    //   inputValue: ""
    // });
  }
  handleItemDel(idx) {
    // immutable  state不允许我们做任何改变
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(idx, 1);
      return { list };
    });
    // this.setState({
    //   list: list
    // });
  }
}
export default TodoList;
