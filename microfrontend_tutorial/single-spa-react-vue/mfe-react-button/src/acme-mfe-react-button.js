import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Root from "./root.component.js";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  createRoot,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return <div>Error in React MFE</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
