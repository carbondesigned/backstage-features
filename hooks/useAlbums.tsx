import { useQuery } from "react-query";
import api from "axiosStore";
import type { IAlbum } from "types/album";

const fetchAlbums = async () => {
  const { data } = await api.get("/albums", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (data.success) {
    return data.data;
  }
  return data;
};

const useAlbums = () => {
  return useQuery<IAlbum[], Error>("albums", fetchAlbums);
};

export { useAlbums, fetchAlbums };
