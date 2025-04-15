export class DropdownMenu {
  constructor(btnText) {
    // Initialise the dropdown div.
    this.dropdownDiv = document.createElement("div");
    this.dropdownDiv.classList.add("dropdown-menu");

    // Initialise dropdown button.
    this.dropdownBtn = document.createElement("button");
    this.dropdownBtn.classList.add("dropdown-btn");
    this.dropdownBtn.textContent = btnText;
    this.dropdownDiv.appendChild(this.dropdownBtn);

    // Initialise dropdown content and hide it initially.
    this.dropdownContent = document.createElement("div");
    this.dropdownContent.classList.add("dropdown-content");
    this.dropdownDiv.appendChild(this.dropdownContent);

    // List holding the menu elements.
    this.linkElems = [];

    // Reference to the parent element.
    this.parentElement = null;

    // Display dropdownContent when you hover the dropdownBtn.
    this.dropdownBtn.addEventListener("mouseenter", () => {
      this.#displayLinks();
    });

    this.dropdownDiv.addEventListener("mouseleave", () => {
      this.#hideLinks();
    });

    this.dropdownContent.addEventListener("mouseenter", () => {
      this.#displayLinks();
    });
  }

  #displayLinks() {
    this.dropdownContent.style.opacity = "1";
    this.dropdownContent.style.maxHeight = "500px";
    this.dropdownContent.style.pointerEvents = "auto";
  }

  #hideLinks() {
    this.dropdownContent.style.maxHeight = "0";
    this.dropdownContent.style.opacity = "0";
    this.dropdownContent.style.pointerEvents = "none";
  }

  setBtnText(btnText) {
    this.dropdownBtn.textContent = btnText;
  }

  addLink(link, linkText) {
    let linkElem = document.createElement("a");
    linkElem.classList.add("dropdown-link");
    linkElem.href = link;
    linkElem.textContent = linkText;
    this.dropdownContent.appendChild(linkElem);
    this.linkElems.push(linkElem);
  }

  removeLink(linkIdx) {
    if (
      Number.isInteger(linkIdx) &&
      linkIdx >= 0 &&
      linkIdx < this.linkElems.length
    ) {
      let linkElem = this.linkElems.splice(idx, 1)[0];
      this.dropdownContent.removeChild(linkElem);
    } else {
      console.log("DropdownMenu.linkIdx: index out of range.");
    }
  }

  attachMenuTo(parentElement) {
    parentElement.appendChild(this.dropdownDiv);
    this.parentElement = parentElement;
  }
}
