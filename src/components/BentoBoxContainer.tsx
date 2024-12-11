import React from "react";

import "./BentoBoxContainer.css";

const BentoBoxContainer = ({
  children,
  className,
  rows,
  cols,
  gap = "md",
}: {
  children: React.ReactNode;
  className?: string;
  rows: number;
  cols: number;
  gap?: "sm" | "md" | "lg" | "xl";
}) => {
  let gapSize = "10px";
  switch (gap) {
    case "sm":
      gapSize = "4px";
      break;
    case "lg":
      gapSize = "16px";
      break;
    case "xl":
      gapSize = "24px";
      break;
  }

  return (
    <div
      className={`bento-box-container ${className}`}
      style={{
        gap: gapSize,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};

export default BentoBoxContainer;
