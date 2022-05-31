import useGetToken from 'hooks/useGetToken';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';

type Props = {};

const Dashboard = (props: Props) => {
  const router = useRouter();
  const token = useGetToken();

  useEffect(() => {
    if (token.length === 0) {
      router.push('/');
    }
  }, []);
  return <div className='min-h-screen bg-neutral'></div>;
};

export default Dashboard;
