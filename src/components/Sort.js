import React, { Component } from "react";
import "../scss/_sort.scss";

class Sort extends Component {
  render() {
    return (
      <div className="dropdown">
        <p className="filter-text"> Filter </p>

        <select>
          <option>All</option>
          <option>Done</option>
          <option>Undone</option>
        </select>
      </div>
    );
  }
}

export default Sort;
