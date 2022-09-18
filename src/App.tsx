import { useState } from "react";
import Card from "./components/Card";
import List, { Options } from "./components/List";

// use State

function App() {
  const [state, setState] = useState("");
  const Items: Array<Options> = [
    { name: "test", id: 1 },
    { name: "cairo", id: 2 },
  ];
  return (
    <div>
      <Card title={state} />
      <h2>--------------</h2>
      <List items={Items} onItemClick={(name) => setState(name)} />
    </div>
  );
}

export default App;
