import React from "react";

type Props = {
  title: string;
};

export default function Button(props: Props) {
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
