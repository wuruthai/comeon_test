import { Switch } from "react-router-dom";
import LoginRoute from "./login.route";

const RenderRoutes = () => {
  return (
    <Switch>
      <LoginRoute />
    </Switch>
  );
};

export default RenderRoutes;
