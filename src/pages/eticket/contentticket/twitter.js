import React from "react";

const Twitter = ({ activeTab }) => {
  if (activeTab !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <div>twitter</div>
    </React.Fragment>
  );
};

export default Twitter;
