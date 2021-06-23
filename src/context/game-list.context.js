import React, { useState, useCallback } from "react";
import { service } from "utils";

const GameListContext = React.createContext();
export const GameListProvider = ({ children }) => {
  const [gameList, setGameList] = useState([]);

  const getGameList = useCallback(() => {
    service.get("/games").then((result) => {
      setGameList(result.data);
      return result.data;
    });
  }, []);

  return (
    <GameListContext.Provider value={{ gameList, getGameList }}>
      {children}
    </GameListContext.Provider>
  );
};

export const useGameList = () => React.useContext(GameListContext);
