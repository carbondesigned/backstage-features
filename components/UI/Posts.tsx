import Loading from "components/Loading"
import { usePosts } from "hooks/usePosts"
import { IPost } from "types/posts"
import { Post } from "./Post"

export const Posts = () => {
  const { data: posts, isLoading, error } = usePosts()
  return (
    <section className='text-base-100 mt-24'>
      <h2 className='text-4xl lg:text-5xl font-bold'>Recent Posts</h2>
      <p className='text-neutral-content mb-12 my-4 lg:text-lg max-w-[60ch]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A leo arcu
        sapien lobortis. Sed lacus sapien pulvinar.
      </p>
      {isLoading && <Loading />}
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
        {!isLoading &&
          posts?.map((post: IPost, idx: number) => (
            <Post post={post} key={idx} type='normal' />
          ))}
      </div>
    </section>
  )
}
