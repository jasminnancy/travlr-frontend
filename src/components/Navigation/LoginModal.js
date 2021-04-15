import React, { useState } from "react";

//styling
import { Modal, Icon, Form, Button } from "semantic-ui-react";

const LogInModal = (props) => {
  // const { setActiveUser } = props;
  const [nestedIsOpen, setNestedIsOpen] = useState(false);

  const login = (e) => {
    e.preventDefault();
    localStorage.setItem("current_user_id", "1");
    window.location.reload();

    // fetch(`http://localhost:3000/users/1`)
    //   .then((resp) => resp.json())
    //   .then((data) => setActiveUser(data));
  };

  return (
    <Modal
      size="tiny"
      dimmer="blurring"
      trigger={<Button basic>Log In/Sign Up</Button>}
      closeIcon
    >
      <Modal.Header>
        <Icon name="user" />
        Log-in to Your Account
      </Modal.Header>
      <Form size="small" className="log-in" onSubmit={login}>
        <Form.Input fluid label="Username" placeholder="Username" />
        <Form.Input
          fluid
          type="password"
          label="Password"
          placeholder="Password"
        />
        <Button floated="right" size="medium" type="submit">
          Log-in
        </Button>
      </Form>

      <Modal
        open={nestedIsOpen}
        onClose={() => setNestedIsOpen(false)}
        size="small"
        trigger={
          <Button basic icon fluid onClick={() => setNestedIsOpen(true)}>
            Create an account <Icon name="right chevron" />
          </Button>
        }
        closeIcon
      >
        <Modal.Header>
          <Icon name="user" /> Create Your Account
        </Modal.Header>
        <Modal.Content>
          <Form className="log-in" onSubmit={login}>
            <Form.Input label="Username" placeholder="Username" />
            <Form.Input
              type="password"
              label="Password"
              placeholder="Password"
            />
            <Form.Group widths="equal">
              <Form.Input fluid label="First name" placeholder="First name" />
              <Form.Input fluid label="Last name" placeholder="Last name" />
            </Form.Group>
            <Form.Input label="E-mail" placeholder="E-mail" />
            <Button floated="right" size="medium" type="submit">
              Create Account
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </Modal>
  );
};

export default LogInModal;
