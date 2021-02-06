import React from "react";

const Line = ({ activeTab }) => {
  if (activeTab !== 2) {
    return null;
  }
  return (
    <React.Fragment>
      <div>Line</div>
    </React.Fragment>
  );
};

export default Line;
