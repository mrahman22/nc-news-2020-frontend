import React from "react";

const OrderByComponent = (props) => {
  return (
    <div>
      orderBy:
      <select
        onChange={(e) => {
          props.handleOrder(e.target.value);
        }}
      >
        <option value="select" defaultValue>
          select
        </option>
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>
    </div>
  );
};

export default OrderByComponent;
