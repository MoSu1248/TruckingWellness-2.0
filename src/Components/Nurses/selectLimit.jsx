import React from "react";

const SelectLimit = (props) => {
  return (
    <select className="select" onChange={(e) => props.onLimitChange(e.target.value) }>
      <option value="select">Select</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
  );
};

export default SelectLimit;
