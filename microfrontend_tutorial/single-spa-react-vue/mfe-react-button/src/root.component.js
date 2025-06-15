import React from "react";
// Shared state store
import { counterStore } from "@acme/shared-state";

export default function Root() {
  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#61DAFB",
    color: "white",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Button MFE</h2>
      <button style={buttonStyle} onClick={() => counterStore.increment()}>
        Increment Counter
      </button>
    </div>
  );
}
