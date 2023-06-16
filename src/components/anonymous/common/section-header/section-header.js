import React from "react";
import "./section-header.scss";

const SectionHeader = ({ title, desc }) => {
  return (
    <div className="section-title">
      <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>
        {title}
      </h4>
      <h1 className="display-4">{desc}</h1>
    </div>
  );
};

export default SectionHeader;
