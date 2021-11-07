import React, { Component } from "react";
import "../scss/_todoitem.scss";

export default class TodoItem extends Component {
  render() {
    const { id, title, startDate } = this.props.todo;

    return (
      <div className="itemsedit">
        <div>
          <input type="checkbox" />
          {title}
        </div>
        {<span className="itemdate">{startDate}</span>}
        <button
          onClick={this.props.delTodo.bind(this, id)}
          className="btnStyle"
        >
          x
        </button>
      </div>
    );
  }
}
