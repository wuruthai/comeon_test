import React from "react";

import { PlayerProvider } from "./player.context";
import { GameListProvider } from "./game-list.context";
import { CategoriesProvider } from "./categories.context";

const StoreProvider = ({ children }) => {
  return (
    <PlayerProvider>
      <GameListProvider>
        <CategoriesProvider>{children}</CategoriesProvider>
      </GameListProvider>
    </PlayerProvider>
  );
};

export default StoreProvider;
