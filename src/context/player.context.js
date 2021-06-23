import React, { useEffect, useState, useCallback } from "react";
import { STORAGE } from "constants/index";
import { service, Storage } from "utils";

const persistedPlayer = Storage.retrieveData(STORAGE.PLAYER);

const PlayerContext = React.createContext();
export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(persistedPlayer);

  const login = useCallback((payload) => {
    return service.post("/login", payload).then((response) => {
      setPlayer(response.data.player);
      return response.data.player;
    });
  }, []);

  useEffect(() => {
    Storage.storeData(STORAGE.PLAYER, player);
  }, [player]);

  return (
    <PlayerContext.Provider value={{ player, login }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => React.useContext(PlayerContext);
