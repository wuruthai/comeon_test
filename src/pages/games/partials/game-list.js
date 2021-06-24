import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Icon, List, Loader } from "semantic-ui-react";
import { ROUTE_PATHS } from "constants/index";
import { Image } from "components";

const GameList = ({ gameList, isLoading }) => {
  const history = useHistory();
  const onPlay = (code) => history.push(`${ROUTE_PATHS.GAME}/${code}`);

  return (
    <div className="ui relaxed divided game items links">
      <Loader active={isLoading} />
      {gameList.map((item) => (
        <List.Item className="game" key={item.name}>
          <Image src={item.icon} size="small" />
          <List.Content>
            <List.Header>{item.name}</List.Header>
            <List.Description>{item.description}</List.Description>
            <div className="extra">
              <Button
                className="logout"
                secondary
                floated="right"
                onClick={() => onPlay(item.code)}
              >
                Play
                <Icon name="right chevron" />
              </Button>
            </div>
          </List.Content>
        </List.Item>
      ))}
    </div>
  );
};

export default GameList;
