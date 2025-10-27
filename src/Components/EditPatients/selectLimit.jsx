import React from "react";
import "./Pagination.css";

const SelectLimit = (props) => {
  return (
    <select className="select-styling" onChange={(e) => props.onLimitChange(e.target.value) }>
       <option className="select-option-styling" disabled={true}>Select</option>
      <option className="select-option-styling" value="5">5</option>
      <option className="select-option-styling" value="10">10</option>
      <option className="select-option-styling" value="15">15</option>
    </select>
  );
};

export default SelectLimit;
