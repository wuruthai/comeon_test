import React, { useCallback } from "react";
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

  const getByCode = useCallback(
    (code) => gameList.find((game) => code && game.code === code),
    [gameList]
  );

  return (
    <GameListContext.Provider
      value={{ gameList, getGameList, gameListLoading, getByCode }}
    >
      {children}
    </GameListContext.Provider>
  );
};

export const useGameList = () => React.useContext(GameListContext);
