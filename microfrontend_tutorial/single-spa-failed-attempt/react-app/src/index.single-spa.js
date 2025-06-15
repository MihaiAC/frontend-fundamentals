import React from "react";
import ReactDOM from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Root from "./root.component.jsx";

const lifecycles = singleSpaReact({ React, ReactDOM, rootComponent: Root });
export const { bootstrap, mount, unmount } = lifecycles;
