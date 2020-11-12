import React from "react";
import { TStore } from "../stores";

export const GlobalContext = React.createContext<TStore>(null);

interface IProps {
  store: TStore;
}

export const Provider: React.FC<IProps> = ({ children, store }) => {
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};
