import React from "react";
import { Route } from "react-router-dom";
import { GamesPage } from "pages";
import { PageLayout } from "layouts";

const GamesRoute = () => {
  return (
    <Route exact path="/games">
      <PageLayout>
        <GamesPage />
      </PageLayout>
    </Route>
  );
};

export default GamesRoute;
