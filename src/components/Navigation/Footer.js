import React from "react";

//styling
import { Container, Grid } from "semantic-ui-react";

const Footer = () => {
  return (
    <Container className="footer">
      <Grid columns={2} relaxed="very">
        <Grid.Column>© 2019-2021 by Alexandria Pugia</Grid.Column>
        <Grid.Column textAlign="right">
          <a href="https://github.com/jasminnancy">
            Click here to visit my GitHub account
          </a>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Footer;
