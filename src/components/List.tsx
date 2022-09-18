import React from "react";

export type Options = {
  name: string;
  id: number;
};

type Props = {
  items: Array<Options>;
  onItemClick: (name: string) => void;
};

export default function List(props: Props) {
  const { items, onItemClick } = props;
  return (
    <ul>
      {items.map((item, index) => (
        <li onClick={() => onItemClick(item.name)} key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
