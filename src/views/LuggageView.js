import React from "react";

//components
import Luggage from "../components/Luggage/Luggage";

const LuggageView = (props) => {
  const { activeUser, handleAddedBag, handleRemovedBag } = props;

  return (
    <div>
      <Luggage
        activeUser={activeUser}
        handleAddedBag={handleAddedBag}
        handleRemovedBag={handleRemovedBag}
      />
    </div>
  );
};

export default LuggageView;
