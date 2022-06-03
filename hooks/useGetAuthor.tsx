import { useQuery } from 'react-query';
import api from 'axiosStore';
import { IAuthor } from 'types/author';

const fetchAuthor = async (authorName: string) => {
  const { data } = await api.get(`/auth/?id=${authorName}`, {
    // params: {
    //   id: authorName
    // },
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
    },
  });
  if (data.success) {
    return data.data[0];
  }
  return data;
};

const useAuthor = (authorName: string) => {
  return useQuery<IAuthor, Error>('author', () => fetchAuthor(authorName));
};

export {useAuthor, fetchAuthor};
