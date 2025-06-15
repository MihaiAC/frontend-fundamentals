import ReactDOM from "react-dom/client";

function FancyButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "#6200ee",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

class ButtonWrapper extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const label = this.getAttribute("label") || "Click me";
    const mountPoint = document.createElement("div");
    this.root.append(mountPoint);

    const style = document.createElement("style");
    style.textContent = `:host { all: initial; }`;
    this.root.append(style);

    const reactRoot = ReactDOM.createRoot(mountPoint);
    reactRoot.render(
      <FancyButton
        label={label}
        onClick={() =>
          this.dispatchEvent(
            new CustomEvent("clicked", {
              detail: { label },
              bubbles: true,
              composed: true,
            })
          )
        }
      />
    );
  }
}

customElements.define("react-button", ButtonWrapper);
