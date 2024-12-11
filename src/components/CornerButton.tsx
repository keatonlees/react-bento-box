import React from "react";

import "./CornerButton.css";

const CornerButton = ({
  onClick,
  children,
  className,
  backgroundColor = "white",
  color = "black",
  size = "md",
}: {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
}) => {
  let iconSize = "24px";
  let fontSize = "20px";

  switch (size) {
    case "sm":
      iconSize = "18px";
      fontSize = "16px";
      break;
    case "lg":
      iconSize = "30px";
      fontSize = "24px";
      break;
  }

  return (
    <div
      onClick={onClick}
      className={`corner-button ${className}`}
      style={{
        width: "fit-content",
        height: "fit-content",
        backgroundColor: backgroundColor,
      }}
    >
      {children ? (
        <div
          className="corner-button-item corner-button-text"
          style={{
            color: color,
            fontSize: fontSize,
          }}
        >
          {children}
        </div>
      ) : (
        <svg
          className="corner-button-item corner-button-icon"
          style={{
            fill: color,
            width: iconSize,
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      )}
    </div>
  );
};

export default CornerButton;
