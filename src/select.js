import React from "react";

export default function Select(props) {
  const { options, onClickTest } = props;
  return (
    <ul>
      {options.map((item) => (
        <li onClick={() => onClickTest(item)}>{item}</li>
      ))}
    </ul>
  );
}
