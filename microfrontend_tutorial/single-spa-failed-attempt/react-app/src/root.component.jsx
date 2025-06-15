import { useState } from "react";

export default function Root() {
  const [count, setCount] = useState(0);

  function increment() {
    const next = count + 1;
    setCount(next);

    // Emit custom event when count is updated
    window.dispatchEvent(
      new CustomEvent("countUpdated", {
        detail: { next },
      })
    );

    console.log("Count updated event emitted:", next);
  }

  return (
    <div style={{ border: "1px solid green", padding: "1rem" }}>
      <h2>React App</h2>
      <button onClick={increment}>
        Increment Stuff (Clicked {count} times)
      </button>
    </div>
  );
}
