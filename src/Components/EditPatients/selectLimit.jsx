import React from "react";
import "./Pagination.css";

const SelectLimit = (props) => {
  return (
    <select className="select-stylings" onChange={(e) => props.onLimitChange(e.target.value) }>
       <option className="select-option-stylings" disabled={true}>Select</option>
      <option className="select-option-stylings" value="5">5</option>
      <option className="select-option-stylings" value="10">10</option>
      <option className="select-option-stylings" value="15">15</option>
    </select>
  );
};

export default SelectLimit;
