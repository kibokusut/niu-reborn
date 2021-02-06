import React from "react";

const Instagram = ({ activeTab }) => {
  if (activeTab !== 6) {
    return null;
  }
  return (
    <React.Fragment>
      <div>Instagram</div>
    </React.Fragment>
  );
};

export default Instagram;
