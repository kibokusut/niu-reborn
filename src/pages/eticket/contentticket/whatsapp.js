import React from "react";

const Whatsapp = ({ activeTab }) => {
  if (activeTab !== 4) {
    return null;
  }
  return (
    <React.Fragment>
      <div>Whatsapp</div>
    </React.Fragment>
  );
};

export default Whatsapp;
