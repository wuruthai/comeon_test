import { usePlayer } from "context/player.context";
import React from "react";
import { Button, Icon } from "semantic-ui-react";

const LogoutButton = () => {
  const { logout, logoutLoading } = usePlayer();
  return (
    <Button
      className="logout"
      secondary
      floated="left"
      onClick={() => {
        logout();
      }}
      loading={logoutLoading}
    >
      <Icon name="left chevron" />
      Log Out
    </Button>
  );
};

export default LogoutButton;
