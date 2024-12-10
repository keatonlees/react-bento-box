import React from "react";

const BentoBoxContainer = ({ label }: { label: string }) => {
  return (
    <div>
      This is a bento box
      <h1>Label: {label}</h1>
    </div>
  );
};

export default BentoBoxContainer;
