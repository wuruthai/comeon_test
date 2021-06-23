import { PageLayout } from "layouts";
import { Redirect, Route, Switch } from "react-router-dom";
import { usePlayer } from "context/player.context";
import { ROUTE_PATHS } from "constants/index";
import { LoginPage, GamesPage } from "pages";

const RenderRoutes = () => {
  const { player } = usePlayer();
  return (
    <PageLayout>
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={ROUTE_PATHS.LOGIN} />
        </Route>
        <Route exact path={ROUTE_PATHS.LOGIN} component={LoginPage} />
        <Route exact path={ROUTE_PATHS.GAMES}>
          {player ? <GamesPage /> : <Redirect to={ROUTE_PATHS.LOGIN} />}
        </Route>
        <Route>Page Not Found</Route>
      </Switch>
    </PageLayout>
  );
};

export default RenderRoutes;
