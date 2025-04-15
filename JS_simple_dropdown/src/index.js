import { DropdownMenu } from "./dropdown";

const dropdown = new DropdownMenu("Menu");
dropdown.attachMenuTo(document.body);

dropdown.addLink("https://example.com", "Example");
dropdown.addLink("https://github.com", "Github");
