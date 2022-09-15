import React from "react";

export default function Button(props) {
  const { title } = props;
  return (
    <button
      style={{
        padding: "8px",
      }}
    >
      {title}
    </button>
  );
}
