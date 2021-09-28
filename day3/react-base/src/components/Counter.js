import React from "react";
import { useState } from "react";

const defaultValues = {
  count: 1,
  name: "Ahmet",
};

function Counter() {
  const [count, setCount] = useState(1);

  //   const increase = () => setCount((c) => c + 1);
  //   const decrease = () => setCount((c) => c - 1);

  const increaseOrDecrease = (type) => {
    if (type === "+") {
      return setCount((c) => c + 1);
    }
    setCount((c) => c - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increaseOrDecrease("-")}>Azalt</button>
      <button onClick={() => increaseOrDecrease("+")}>Arttir</button>
      <button onClick={() => setCount(defaultValues.count)}>Reset</button>
    </div>
  );
}

export default Counter;
