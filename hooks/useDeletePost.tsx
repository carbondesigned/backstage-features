import { useMutation, useQueryClient } from "react-query";
import api from "axiosStore";

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (slug: string) => {
      return api.delete(`/posts/${slug}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );
};
