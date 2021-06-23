import React from "react";

import { PlayerProvider } from "./player.context";

const StoreProvider = ({ children }) => {
  return <PlayerProvider>{children}</PlayerProvider>;
};

export default StoreProvider;
