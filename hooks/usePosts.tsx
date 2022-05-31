import { useQuery } from 'react-query';
import api from 'axiosStore';
import type { IPost } from 'types/posts';

const fetchPosts = async () => {
  const { data } = await api.get('/posts', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  if (data.success) {
    return data.data;
  }
  return data;
};

const usePosts = () => {
  return useQuery<IPost[], Error>('posts', fetchPosts);
};

export { usePosts, fetchPosts };
