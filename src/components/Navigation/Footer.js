import React from 'react'

//styling
import {
    Container, 
    Grid
} from 'semantic-ui-react'

const Footer = () => {
  return (
    <Container fluid className='footer'>
      <Grid columns={2}>
        <Grid.Column style={{paddingLeft: '35px'}}>
          © 2019-2020 by Alexandria Pugia
        </Grid.Column>
        <Grid.Column textAlign='right' style={{paddingRight: '40px'}}>
          <a href='https://github.com/jasminnancy'>
            Click here to visit my GitHub account
          </a>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default Footer