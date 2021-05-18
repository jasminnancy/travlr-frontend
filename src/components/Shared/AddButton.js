import React from "react";

//styling
import { Button, Icon } from "semantic-ui-react";

const AddButton = (props) => {
  const { name, id, handleUpdate } = props;

  const createNewItem = () => {
    fetch(`http://localhost:3000/${name}`, {
      method: "POST",
      body: JSON.stringify({
        trip_id: id,
        name: `Click to Edit`,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => handleUpdate(name, data));
  };

  return (
    <Button
      onClick={createNewItem}
      icon
      compact
      basic
      floated="left"
      size="mini"
    >
      <Icon name="plus" />
    </Button>
  );
};

export default AddButton;
