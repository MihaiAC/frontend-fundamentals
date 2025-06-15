import React, { useRef, useEffect } from "react";
import { createApp } from "vue";

const VueCounterWrapper = ({ componentPromise }) => {
  const ref = useRef(null);

  useEffect(() => {
    let vueApp;

    componentPromise.then((module) => {
      if (ref.current) {
        const VueComponent = module.default;
        vueApp = createApp(VueComponent);
        vueApp.mount(ref.current);
      }
    });

    return () => {
      // Cleanup: unmount the Vue app when the wrapper is destroyed
      if (vueApp) {
        vueApp.unmount();
      }
    };
  }, [componentPromise]);

  return <div ref={ref} />;
};

export default VueCounterWrapper;
