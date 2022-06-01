import Post from 'components/Dashboard/Post';
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
    <div className='min-h-screen bg-neutral flex gap-12'>
      <div className='drawer drawer-mobile gap-12'>
        <input id='dashboardSidebar' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col p-12'>
          <label
            htmlFor='dashboardSidebar'
            className='btn btn-primary drawer-button lg:hidden'
          >
            Open drawer
          </label>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {posts && posts.map((post) => <Post post={post} key={post.ID} />)}
          </div>
        </div>
        <div className='drawer-side'>
          <label htmlFor='dashboardSidebar' className='drawer-overlay'></label>
          <ul className='menu p-4 overflow-y-auto w-80 bg-base-300 text-neutral-content'>
            <li>
              <a>Posts</a>
            </li>
            <li>
              <a>Albums</a>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
