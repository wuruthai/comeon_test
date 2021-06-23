import React from "react";
import { Route } from "react-router-dom";
import { LoginPage } from "pages";
import { PageLayout } from "layouts";
const LoginRoute = () => {
  return (
    <Route exact path="/login">
      <PageLayout>
        <LoginPage />
      </PageLayout>
    </Route>
  );
};

export default LoginRoute;
