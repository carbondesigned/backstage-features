import { useQuery } from 'react-query';
import api from 'axiosStore';
import { IAuthor } from 'types/author';

const fetchAuthor = async (id: number) => {
  const { data } = await api.get(`/auth/${id}`, {
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
    },
  });
  if (data.success) {
    return data.data;
  }
  return data;
};

const useAuthor = (id: number) => {
  return useQuery<IAuthor, Error>('author', () => fetchAuthor(id));
};

export {useAuthor, fetchAuthor};
