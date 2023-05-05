import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>{count}</h1>
      <button style={{ marginRight: 10 }} onClick={decrementCount}>
        decrement
      </button>
      <button onClick={incrementCount}>increment</button>
    </div>
  );
}

export default App;
