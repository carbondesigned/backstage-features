import { useQuery } from "react-query";
import api from "axiosStore";
import type { IPost } from "types/posts";

const fetchPost = async (slug: string) => {
  const { data } = await api.get(`/posts/${slug}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (data.success) {
    return data.data;
  }
  return data;
};

const usePost = (slug: string) => {
  return useQuery<IPost, Error>("post", () => fetchPost(slug));
};

export { usePost, fetchPost };
