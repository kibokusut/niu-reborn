import React from "react";

const Telegram = ({ activeTab }) => {
  if (activeTab !== 5) {
    return null;
  }
  return (
    <React.Fragment>
      <div>Telegram</div>
    </React.Fragment>
  );
};

export default Telegram;
