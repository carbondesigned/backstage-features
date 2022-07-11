import { useQuery } from 'react-query';
import api from 'axiosStore';
import { IAuthor } from 'types/author';

const fetchAuthors = async () => {
  const { data } = await api.get('/auth/', {
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
    },
  });
  if (data.success) {
    return data.data;
  }
  return data;
};

const useAuthors = () => {
  return useQuery<IAuthor[], Error>('authors', fetchAuthors);
};

export {useAuthors, fetchAuthors};
