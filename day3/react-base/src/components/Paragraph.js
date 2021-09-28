import React from "react";

function Paragraph(props) {
  console.log(props);
  return <div>{props.text}</div>;
}

export default Paragraph;
