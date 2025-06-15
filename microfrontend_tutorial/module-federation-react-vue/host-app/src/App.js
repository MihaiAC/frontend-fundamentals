import React, { Suspense, lazy } from "react";
import VueCounterWrapper from "./VueCounterWrapper";

const ReactButton = lazy(() => import("reactButtonApp/Button"));
const vueCounterPromise = import("vueCounterApp/Counter");

const App = () => {
  const mainStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "40px",
    marginTop: "50px",
    fontFamily: "sans-serif",
  };
  return (
    <div>
      <main style={mainStyle}>
        <Suspense fallback="Loading React Button...">
          <ReactButton />
        </Suspense>
        <Suspense fallback="Loading Vue Counter...">
          <VueCounterWrapper componentPromise={vueCounterPromise} />
        </Suspense>
      </main>
    </div>
  );
};

export default App;
