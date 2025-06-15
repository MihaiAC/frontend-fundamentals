import { counterStore } from "@acme/shared-logic";
import React from "react";

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#61DAFB",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

const Button = () => (
  <div style={{ padding: "20px" }}>
    <h2>React Button MFE</h2>
    <button style={buttonStyle} onClick={() => counterStore.increment()}>
      Increment Counter
    </button>
  </div>
);

export default Button;
