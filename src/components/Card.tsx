import React from "react";
type Props = {
  title: string;
};

export default function Card(props: Props) {
  return <h1>{props.title}</h1>;
}
