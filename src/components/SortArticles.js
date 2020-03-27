import React, { Component } from "react";

class SortArticles extends Component {
  render() {
    return (
      <div className="sorter">
        sortBy:
        <select
          onChange={e => {
            this.props.handleSort(e.target.value);
          }}
        >
          <option value="select" defaultValue>
            select
          </option>
          <option value="comment_count">comment_count</option>
          <option value="votes">votes</option>
        </select>
        <br />
      </div>
    );
  }
}

export default SortArticles;
