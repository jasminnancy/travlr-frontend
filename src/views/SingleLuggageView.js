import React, { useState, useEffect } from "react";
import SingleBagDetails from "../components/SingleBagDetails";

const BAG_URL = "http://localhost:3000/luggages";

const SingleLuggageView = (props) => {
  const { activeUser, handleRemovedBag } = props;
  const [bag, setBag] = useState(null);

  useEffect(() => {
    if (activeUser) {
      let id = window.location.pathname.split("/")[2];
      fetch(BAG_URL + `/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
          setBag(data);
        });
    }
  }, [activeUser]);

  const handleEditClick = (bag, values) => {
    fetch(BAG_URL + `/${bag.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: values.name,
        size: values.size,
        luggage_type: values.luggage_type,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        // setSelectedBag(data);
        alert("Your bag has been updated!");
      });
  };

  const handleDeleteClick = (e, bag) => {
    e.preventDefault();

    fetch(BAG_URL + `/${bag.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        handleRemovedBag(bag);
        console.log(data);
      });
  };

  if (!bag || !activeUser) return null;

  return (
    <SingleBagDetails
      bag={bag}
      handleEditClick={handleEditClick}
      handleDeleteClick={handleDeleteClick}
    />
  );
};

export default SingleLuggageView;
