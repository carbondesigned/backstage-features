import Loading from "components/Loading"
import { usePosts } from "hooks/usePosts"
import React from "react"
import { IPost } from "types/posts"
import { Post } from "./Post"

export const Posts = () => {
  const { data: posts, isLoading, error } = usePosts()
  // filter the latest post by it's CreatedAt date and filter the rest of posts
  const [latestPost, setLatestPost] = React.useState<IPost>()
  const [restOfPosts, setRestOfPosts] = React.useState<IPost[]>()

  React.useEffect(() => {
    setLatestPost(
      posts?.sort(
        (a, b) =>
          new Date(b.CreatedAt).getTime() - new Date(a.CreatedAt).getTime()
      )[0]
    )
    setRestOfPosts(posts?.filter((post) => post.ID !== latestPost?.ID))
    //.slice(0, 3))
  }, [posts, latestPost])
  return (
    <section className='text-base-100 mt-24'>
      <h2 className='text-4xl lg:text-5xl font-bold'>Recent Posts</h2>
      <p className='text-neutral-content mb-12 my-4 lg:text-lg max-w-[60ch]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A leo arcu
        sapien lobortis. Sed lacus sapien pulvinar.
      </p>
      {isLoading && <Loading />}
      <div className='mb-6'>
        {latestPost && <Post post={latestPost as IPost} type='latest' />}
      </div>
      <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
        {!isLoading &&
          restOfPosts?.map((post: IPost, idx: number) => (
            <Post post={post} key={idx} type='normal' />
          ))}
      </div>
    </section>
  )
}
