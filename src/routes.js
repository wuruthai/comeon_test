import { PageLayout } from "layouts";
import { Redirect, Route, Switch } from "react-router-dom";
import { usePlayer } from "context/player.context";
import { ROUTE_PATHS } from "constants/index";
import { LoginPage, GamesPage } from "pages";

const LoginRedirect = (routeProps) => {
  const { player } = usePlayer();

  return (
  <Route {...routeProps}>
    {player ? <routeProps.component /> : <Redirect to={ROUTE_PATHS.LOGIN} />}
  </Route>
)};

const RenderRoutes = () => {
  return (
    <PageLayout>
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={ROUTE_PATHS.LOGIN} />
        </Route>
        <Route exact path={ROUTE_PATHS.LOGIN} component={LoginPage} />
        <LoginRedirect exact path={ROUTE_PATHS.GAMES} component={GamesPage}/>
        <Route>Page Not Found</Route>
      </Switch>
    </PageLayout>
  );
};

export default RenderRoutes;
