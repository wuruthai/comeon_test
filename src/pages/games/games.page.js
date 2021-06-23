import React, { useEffect } from "react";
import { useGameList } from "context/game-list.context";
import { usePlayer } from "context/player.context";
import { useCategories } from "context/categories.context";
import {
  Grid,
  Button,
  Icon,
  Input,
  Header,
  Divider,
  List,
  Image,
} from "semantic-ui-react";

import Avatar from "./partials/avatar";
import LogoutButton from "./partials/logout-button";

const GamesPage = () => {
  const { player } = usePlayer();
  const { gameList, getGameList } = useGameList();
  const { categories, getCategories } = useCategories();
  useEffect(() => {
    getGameList();
    getCategories();
  }, []);

  return (
    <div className="casino">
      <Grid centered>
        <Grid.Column width={12}>
          {player && <Avatar player={player} />}
          <LogoutButton />
        </Grid.Column>
        <Grid.Column width={4}>
          <Input icon="search" placeholder="Search..." />
        </Grid.Column>
      </Grid>
      <Grid>
        <Grid.Column width={12}>
          <Header as="h3">Games</Header>
          <Divider />
          <div className="ui relaxed divided game items links">
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
        </Grid.Column>
        <Grid.Column width={4}>
          <Header as="h3">Categories</Header>
          <Divider />
          <List className="category" animated selection>
            {categories.map((category) => (
              <List.Item key={category.name}>
                <List.Content>
                  <List.Header>{category.name}</List.Header>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default GamesPage;
