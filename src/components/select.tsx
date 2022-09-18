import React from "react";

type Props = {
  options: Array<string>;
  onClickTest: (item: string) => void;
};

export default function Select(props: Props) {
  const { options, onClickTest } = props;
  return (
    <ul>
      {options.map((item) => (
        <li onClick={() => onClickTest(item)}>{item}</li>
      ))}
    </ul>
  );
}
