import { useMutation, useQueryClient } from "react-query";
import api from "axiosStore";

export const useDeleteAlbum = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (slug: string) => {
      return api.delete(`/albums/${slug}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("albums");
      },
    }
  );
};
