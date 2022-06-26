import { useMutation, useQueryClient } from "react-query"
import api from "axiosStore"

export const useLikePost = () => {
  const queryClient = useQueryClient()
  return useMutation(
    (slug: string) => {
      return api.get(`/posts/${slug}/like`)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts")
      },
    }
  )
}
