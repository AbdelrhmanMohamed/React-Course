import React from "react";

export default function List(props) {
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
