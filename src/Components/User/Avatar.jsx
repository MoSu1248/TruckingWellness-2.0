import React from "react";

import "./style.css";
const avatar = ({ user: { firstName, lastName } }) => {

const getByteLength = (string) => {
  return new TextEncoder().encode(string[0])[0];
};

const minCharByteValue = getByteLength("a");
const maxCharByteValue = getByteLength("z");

const minRange = minCharByteValue / maxCharByteValue;
const maxRange = 1;

const initials = (firstname, lastname) =>
  (firstname[0] + lastname[0]).toUpperCase();

const colorByUser = ({ firstName, lastName}) => {
  const userValue =
    getByteLength(firstName[0].toLowerCase()) /
    getByteLength(lastName[0].toLowerCase());

  return `hsl(${map(userValue, minRange, maxRange, 0, 360)},50%,50%)`;
};


function map(value, start1, stop1, start2, stop2) {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  }
  
  console.log(map);
  

  return (
    <div 
    className="Avatar"
    style={{  opacity: 0.7, backgroundColor: colorByUser({ firstName, lastName} ) }}
    >
      <p className="intials"  >{initials(firstName , lastName)}</p>
    </div>
  );

}
export default avatar

