import React from "react";

import "./CornerButton.css";

const CornerButton = ({
  children,
  className,
  size = "md",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) => {
  let fontSize = "20px";

  switch (size) {
    case "sm":
      fontSize = "16px";
      break;
    case "lg":
      fontSize = "24px";
      break;
  }

  return (
    <div
      className={`corner-button ${className}`}
      style={{
        width: "fit-content",
        height: "fit-content",
        backgroundColor: "white",
      }}
      {...props}
    >
      <div
        className="corner-button-item"
        style={{
          fontSize: fontSize,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CornerButton;
