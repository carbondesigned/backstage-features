import { createContext, ReactNode, useContext, useState } from 'react';
import { IPost } from 'types/posts';

type Props = {
  children: ReactNode;
};

const AppContext = createContext({} as any);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }: Props) {
  const [token, setToken] = useState<string>('');
  const [currentPost, setCurrentPost] = useState<IPost>()
  const state = {
    token,
    setToken,
    currentPost,
    setCurrentPost
  };
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}
