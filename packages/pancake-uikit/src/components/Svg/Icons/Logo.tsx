import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 200 37" {...props}>
      <title>logo</title>
      <defs>
        <image  width="200" height="37" id="img1" href="data:image/png;base64,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"/>
      </defs>
      <style>
      </style>
      <use id="Background" href="#img1" x="0" y="0"/>
    </Svg>
  );
};

export default Icon;