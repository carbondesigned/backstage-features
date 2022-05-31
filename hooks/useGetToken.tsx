import React from 'react';
import { useAppContext } from '../contexts/AppContext';

type Props = {};

const useGetToken = () => {
  // create a custom react hook to get the token from local storage
  const { token, setToken } = useAppContext();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  }, []);

  return token;
};

export default useGetToken;
