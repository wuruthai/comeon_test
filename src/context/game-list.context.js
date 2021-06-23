import React from "react";
import { useFetch } from "hooks";

const GameListContext = React.createContext();
export const GameListProvider = ({ children }) => {
  const {
    gameListRequest: getGameList,
    gameListData: gameList,
    gameListLoading,
  } = useFetch({
    url: "/games",
    prefix: "gameList",
    defaultData: [],
  });
  return (
    <GameListContext.Provider
      value={{ gameList, getGameList, gameListLoading }}
    >
      {children}
    </GameListContext.Provider>
  );
};

export const useGameList = () => React.useContext(GameListContext);
