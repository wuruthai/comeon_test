import React, { useEffect, useCallback } from "react";
import { STORAGE } from "constants/index";
import { Storage } from "utils";
import { useFetch } from "hooks";

const persistedPlayer = Storage.retrieveData(STORAGE.PLAYER);

const PlayerContext = React.createContext();
export const PlayerProvider = ({ children }) => {
  const {
    playerRequest: login,
    setPlayerData: setPlayer,
    playerData: player,
    playerLoading: loginLoading,
  } = useFetch({
    url: "/login",
    prefix: "player",
    defaultData: persistedPlayer,
    method: "POST",
    modelData: (data) => data.player,
  });

  const { logoutRequest, logoutLoading } = useFetch({
    url: "/logout",
    prefix: "logout",
    method: "POST",
  });

  useEffect(() => {
    Storage.storeData(STORAGE.PLAYER, player);
  }, [player]);

  const logout = useCallback(() => {
    return logoutRequest({
      username: player.name.split(" ")[0].toLowerCase(),
    }).then(() => setPlayer(null));
  }, [setPlayer, player, logoutRequest]);

  return (
    <PlayerContext.Provider
      value={{ player, login, logout, loginLoading, logoutLoading }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => React.useContext(PlayerContext);
