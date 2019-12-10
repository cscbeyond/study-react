import React, { Component, Fragment } from "react";
import "./style.css";
class TodoList extends Component {
  constructor(props) {
    // 最先执行的函数
    super(props);
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
        <label htmlFor="insertArea">输入内容:</label>
        <input
          className="input"
          id="insertArea"
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        <ul>
          {this.state.list.map((item, idx) => {
            return (
              // <li key={idx} onClick={this.handleItemDel.bind(this, idx)}>
              //   {item}
              // </li>
              <li
                key={idx}
                onClick={this.handleItemDel.bind(this, idx)}
                dangerouslySetInnerHTML={{ __html: item }}
              >
                {/* {item} */}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e) {
    let inputValue = e.target.value;
    this.setState({
      inputValue
    });
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    });
    this.setState({
      inputValue: ""
    });
  }
  handleItemDel(idx) {
    // immutable  state不允许我们做任何改变
    const list = [...this.state.list];
    list.splice(idx, 1);
    this.setState({
      list: list
    });
  }
}
export default TodoList;
