import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("state değişti");
  }, [count]);

  useEffect(() => {
    console.log("mount değişti");

    return () => console.log("Unmounted");
  });

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrease}>Azalt</button>
      <button onClick={increase}>Arttır</button>

      <hr />
      <input
        placeholder="name"
        name={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Counter;
