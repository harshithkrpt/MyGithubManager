import React from "react";
import { animated, useSpring } from "react-spring";

const MockData = () => {
  const props = useSpring({
    to: async (next: any, cancel: any) => {
      await next({ opacity: 1, color: "#ffaaee" });
      await next({ opacity: 0, color: "rgb(14,26,19)" });
    },
    from: { opacity: 0, color: "red" },
  });
  // ...
  return <animated.div style={props}>I will fade in and out</animated.div>;
};

export default MockData;
