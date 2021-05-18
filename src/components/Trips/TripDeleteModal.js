import React, { useState } from "react";

//styling
import { Modal, Button } from "semantic-ui-react";

const TripEditModal = (props) => {
  const { trip, handleTripDelete } = props;
  const [open, setOpen] = useState(false);

  return (
    <Modal
      size="small"
      dimmer="blurring"
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      trigger={
        <Button basic onClick={() => setOpen(true)}>
          Delete Trip
        </Button>
      }
      onClose={() => setOpen(false)}
      closeOnDimmerClick={false}
      open={open}
    >
      <Modal.Header>Uh oh!</Modal.Header>
      <Modal.Content>
        This action can't be reversed. Are you sure you want to delete your
        trip?
        <div style={{ textAlign: "right", marginTop: "25px" }}>
          <Button basic onClick={() => handleTripDelete(trip)}>
            Yes, Delete
          </Button>
          <Button basic onClick={() => setOpen(false)}>
            No, Cancel
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default TripEditModal;
