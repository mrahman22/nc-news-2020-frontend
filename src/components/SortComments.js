import React, { Component } from "react";

class SortComments extends Component {
  render() {
    return (
      <div className="sort-comments">
        sortBy:
        <select
          onChange={(e) => {
            this.props.handleSort(e.target.value, this.props.article_id);
          }}
        >
          <option value="select" defaultValue>
            select
          </option>
          <option value="author">author</option>
          <option value="votes">votes</option>
        </select>
        <br />
      </div>
    );
  }
}

export default SortComments;
