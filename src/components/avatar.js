import React from "react";
import { List } from "semantic-ui-react";
import { Image } from "components";

const Avatar = ({ player }) => {
  return (
    <List>
      <List.Item className="player">
        <Image src={player.avatar} avatar />
        <List.Content>
          <List.Header>{player.name}</List.Header>
          <List.Description>{player.event}</List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default Avatar;
