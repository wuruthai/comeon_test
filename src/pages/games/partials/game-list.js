import React from 'react'
import { Button, Icon, List, Image } from "semantic-ui-react";

const GameList = ({gameList}) => {

  return          <div className="ui relaxed divided game items links">
  {gameList.map((item) => (
    <List.Item className="game" key={item.name}>
      <Image src={item.icon} size="small" />
      <List.Content>
        <List.Header>{item.name}</List.Header>
        <List.Description>{item.description}</List.Description>
        <div className="extra">
          <Button className="logout" secondary floated="right">
            Play
            <Icon name="right chevron" />
          </Button>
        </div>
      </List.Content>
    </List.Item>
  ))}
</div>
}

export default GameList