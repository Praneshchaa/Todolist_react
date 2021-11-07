import React, { Component } from "react";
import "../scss/_sort.scss";

class Sort extends Component {
  render() {
    return (
      <div className="dropdown">
        <p className="filter-text"> Sort </p>

        <select>
          <option>Asc</option>
          <option>Desc</option>
        </select>
      </div>
    );
  }
}

export default Sort;
