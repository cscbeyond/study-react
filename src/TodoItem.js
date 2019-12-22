import React, { Component } from "react";
import PropTypes from "prop-types";
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { content, test } = this.props;
    return (
      <div onClick={this.handleClick}>
        {test} --- {content}{" "}
      </div>
    );
  }
  handleClick() {
    const { deleteItem, idx } = this.props;
    deleteItem(idx);

    // this.props.delItem(this.props.idx);
    // this.handleItemDel(this.props.idx);
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired, // 是string类型，并且必须传递
  content: PropTypes.arrayOf(PropTypes.number, PropTypes.string), // 默认
  deleteItem: PropTypes.func,
  idx: PropTypes.number
};

TodoItem.defaultProps = {
  test: "hello world"
};

export default TodoItem;
