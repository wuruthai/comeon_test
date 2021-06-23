import React, { useEffect, useMemo, useState, useCallback } from "react";
import { STORAGE } from "constants/index";
import { service, Storage } from "utils";

const persistedPlayer = Storage.retrieveData(STORAGE.PLAYER);

const PlayerContext = React.createContext();
export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(persistedPlayer);

  const login = useCallback((payload) => {
    service
      .post("/login", payload)
      .then((response) => setPlayer(response.data.player));
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
