import React from "react";
import RouteWithSubRoutes from "./route-with-sub-routes";
import { Route, Switch } from "react-router-dom";
import { EmptyPage } from "components";

const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route
        component={() => (
          <EmptyPage
            title="NOT FOUND"
            message="A page matching the url you entered was not found
"
          />
        )}
      />
    </Switch>
  );
};

export default RenderRoutes;
