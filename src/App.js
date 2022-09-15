import { useState } from "react";
import "./App.css";
// import Button from "./Button";
// import Select from "./select";
// import { useState } from "react";
import Card from "./com/card";
import List from "./com/list";

// use State

function App() {
  const [state, setState] = useState("");
  return (
    <div>
      <Card title={state} />
      <h2>----------------</h2>
      <List
        items={[
          { name: "test", id: 1 },
          { name: "cairo", id: 2 },
        ]}
        onItemClick={(name) => setState(name)}
      />
    </div>
  );
}

export default App;
