import React from "react";

const name = "James";
const date = new Date();
const year = date.getFullYear();
function Heading() {
  {
    /*camelCase used in JSX Attributes and Styling React Elements*/
  }
  return (
    <h1 className="heading" contentEditable="true">
      Hi {name}. Today is {date.getMonth()}/{date.getDate()}/
      {date.getFullYear()}
    </h1>
  );
}

export default Heading;
