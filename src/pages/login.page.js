import React from 'react'
import { Button, Input, Icon, Grid, Form } from 'semantic-ui-react'

import { Logo } from 'components'

const LoginPage = () => {
  return (
    <>
    <Grid centered >
      <Grid.Column width={9}><Logo /></Grid.Column>
    </Grid>
      <div className="main container">
        <div className="login" >
          <Grid centered>
            <Form>
              <Form.Field>
                <Input name="username" placeholder="Username" icon='user' />
              </Form.Field>
              <Form.Field>
                <Input name="password" placeholder="Password" icon='lock' />
              </Form.Field>
              <Form.Field>
                <Button basic>
                  Login
                  <Icon name="right chevron" />
                </Button>
              </Form.Field>
            </Form>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default LoginPage