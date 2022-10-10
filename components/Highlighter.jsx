import React from "react";
import { RoughNotation } from "react-rough-notation";

export const Highlighter = ({ color, children }) => {
  // Change animation duration depending on length of text(speed = distance / time)
  const animationDuration = Math.floor(30 * children.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 8]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  )
};