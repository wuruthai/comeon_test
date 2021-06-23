import { usePlayer } from "context/player.context";
import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { ROUTE_PATHS } from "constants/index";

const LogoutButton = () => {
  const { logout, logoutLoading } = usePlayer();
const history = useHistory()
  return (
    <Button className="logout" secondary floated="left" onClick={() => {
      logout().then(() => history.push(ROUTE_PATHS.LOGIN));
    }} loading={logoutLoading}>
      <Icon name="left chevron" />
      Log Out
    </Button>
  );
};

export default LogoutButton;
