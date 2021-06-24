import React, { useEffect, useState, useMemo } from "react";
import { useGameList } from "context/game-list.context";
import { usePlayer } from "context/player.context";
import { useCategories } from "context/categories.context";
import { Grid, Input, Header, Divider, Loader } from "semantic-ui-react";

import { Avatar, LogoutButton } from "components";

import GameList from "./partials/game-list";
import CategoriesList from "./partials/categories-list";
import { useSearch } from "hooks";
import "lib/comeon.game-1.0.min";

const GamesPage = () => {
  const { player } = usePlayer();
  const { gameList, getGameList, gameListLoading } = useGameList();
  const { categories, getCategories, categoriesLoading } = useCategories();

  useEffect(() => {
    getGameList();
    getCategories();
  }, []);

  const {
    search,
    setSearch,
    searchedList: searchedGameList,
  } = useSearch(gameList, (item) => item.name);

  const [selectedCategoryId, setSelectedCategoryId] = useState(0);

  const filteredGameList = useMemo(() => {
    return searchedGameList.filter((game) =>
      game.categoryIds.some((categoryId) => categoryId === selectedCategoryId)
    );
  }, [searchedGameList, selectedCategoryId]);

  return (
    <div className="casino">
      <Grid centered>
        <Grid.Column width={12}>
          {player && <Avatar player={player} />}
          <LogoutButton />
        </Grid.Column>
        <Grid.Column width={4}>
          <Input
            icon="search"
            placeholder="Search..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </Grid.Column>
      </Grid>
      <Grid>
        <Grid.Column width={12}>
          <Header as="h3">Games</Header>
          <Divider />
          <GameList gameList={filteredGameList} isLoading={gameListLoading} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Header as="h3">Categories</Header>
          <Divider />
          <CategoriesList
            categories={categories}
            selectedCategoryId={selectedCategoryId}
            onChangeSelectedCategoryId={setSelectedCategoryId}
            isLoading={categoriesLoading}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default GamesPage;
