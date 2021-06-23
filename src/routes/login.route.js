import React from 'react'
import { Route } from "react-router-dom";
import { LoginPage } from 'pages'

const LoginRoute = () => {
  return (
    <Route exact path="/login">
      <LoginPage />
    </Route>
  )
}

export default LoginRoute