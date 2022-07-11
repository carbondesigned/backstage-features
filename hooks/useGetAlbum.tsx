import { useQuery } from "react-query";
import api from "axiosStore";
import type { IAlbum } from "types/album";

const fetchAlbum = async (slug: string) => {
  const { data } = await api.get(`/albums/${slug}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (data.success) {
    return data.data;
  }
  return data;
};

const useGetAlbum = (slug: string) => {
  return useQuery<IAlbum, Error>("album", () => fetchAlbum(slug));
};

export { useGetAlbum, fetchAlbum };
