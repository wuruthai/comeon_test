import React, { useEffect, useState } from "react";
import { Grid, Header, Loader, Divider, Button, Icon } from "semantic-ui-react";
import { usePlayer } from "context/player.context";
import { Avatar, LogoutButton } from "components";
import { useGameList } from "context/game-list.context";
import { useHistory, useParams } from "react-router-dom";
import "lib/comeon.game-1.0.min";
import { ROUTE_PATHS } from "constants/index";

const GamePage = () => {
  const { code } = useParams();
  const history = useHistory();
  const { player } = usePlayer();
  const [gameData, setGameData] = useState(null);
  const { gameListLoading, getGameList, gameList, getByCode } = useGameList();

  useEffect(() => {
    getGameList();
  }, []);

  useEffect(() => {
    gameList.length && setGameData(getByCode(code));
  }, [gameList, setGameData, code, getByCode]);

  useEffect(() => {
    gameData && window.comeon.game.launch(gameData.code);
  }, [gameData]);
  return (
    <div className="casino-game">
      <Grid>
        <Grid.Column width={12}>
          {player && <Avatar player={player} />}
          <LogoutButton />
        </Grid.Column>
      </Grid>
      <Grid>
        <Grid.Column>
          <Button onClick={() => history.push(ROUTE_PATHS.GAMES)}>
            <Icon name="left chevron" />
            Games
          </Button>
          <Header as="h3">{gameData?.name}</Header>
          <Divider />
          <Loader active={gameListLoading} inline="centered" />
          <div id="game-launch"></div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default GamePage;
