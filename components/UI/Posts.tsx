import Loading from "components/Loading"
import { usePosts } from "hooks/usePosts"
import { IPost } from "types/posts"
import { Post } from "./Post"

export const Posts = () => {
  const { data: posts, isLoading, error } = usePosts()
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
      {isLoading && <Loading />}
      {!isLoading &&
        posts?.map((post: IPost) => <Post post={post} type='normal' />)}
    </section>
  )
}
