import useGetToken from 'hooks/useGetToken';
import { usePosts } from 'hooks/usePosts';
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

  const { data: posts, error, isLoading } = usePosts();

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
  return (
    <div className='min-h-screen bg-neutral'>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {posts && posts.map((post) => <div key={post.ID}>{post.title}</div>)}
      </div>
    </div>
  );
};

export default Dashboard;
