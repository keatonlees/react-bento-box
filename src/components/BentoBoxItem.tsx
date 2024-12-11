import React from "react";

import "./BentoBoxItem.css";

const BentoBoxItem = ({
  children,
  className,
  start = [0, 0],
  size = [1, 1],
  shadow = false,
  shadowColor = "grey",
}: {
  children: React.ReactNode;
  className?: string;
  start: number[];
  size: number[];
  shadow?: boolean;
  shadowColor?: string;
}) => {
  return (
    <div
      className={`bento-box-item ${className}`}
      style={{
        gridRow: `${start[0] + 1} / span ${size[0]}`,
        gridColumn: `${start[1] + 1} / span ${size[1]}`,
        boxShadow: shadow ? `4px 4px 8px ${shadowColor}` : "none",
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>{children}</div>
    </div>
  );
};

export default BentoBoxItem;
