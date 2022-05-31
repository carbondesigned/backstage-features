import useGetToken from 'hooks/useGetToken';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';

type Props = {};

interface Token {
  email: string;
  exp: number;
  id: number;
}

const Dashboard = (props: Props) => {
  const router = useRouter();
  const token = useGetToken();

  useEffect(() => {
    let decodedToken: Token;
    decodedToken = jwtDecode(localStorage.getItem('token') ?? '');
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem('token');
      router.push('/admin/login');
    }
    if (token?.email?.length < 0) {
      router.push('/');
    }
  }, []);
  return <div className='min-h-screen bg-neutral'></div>;
};

export default Dashboard;
