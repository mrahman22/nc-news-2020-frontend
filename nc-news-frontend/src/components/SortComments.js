import React, { Component } from "react";

class SortComments extends Component {
  render() {
    return (
      <div>
        sortBy:
        <select>
          <option>Select</option>
          <option value="author">author</option>
          <option value="votes">votes</option>
        </select>
        <br />
      </div>
    );
  }
}

export default SortComments;
