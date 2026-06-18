import React from "react";

const customStyle = {
  color: "brown",
  fontSize: "20px", // camelCase used in JSX Attributes and Styling React Elements
  border: "1px solid black",
};
customStyle.color = "green"; // changing on the fly

function MyList() {
  return (
    <ul>
      <li>Banana</li>
      <li style={{ color: "red" }}>Apple with Inline Styling ON THE FLY</li>
      <li>Mango</li>
      <li style={customStyle}>Grape with Inline Styling ON THE FLY</li>
    </ul>
  );
}

export default MyList;
