import { createContext, ReactNode, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

const AppContext = createContext({} as any);

export function AppProvider({ children }: Props) {
  const state = {};

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}
