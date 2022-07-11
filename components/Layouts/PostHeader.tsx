import Image from "next/image"
import { IAuthor } from "types/author"
import { IPost } from "types/posts"

type Props = {
  post: IPost
  author: IAuthor
}
export const PostHeader = ({ post, author }: Props) => {
  return (
    <div className='text-base-100 py-20'>
      <h1 className='text-4xl font-bold'>{post.title}</h1>
      <p className='text-neutral-content my-4 lg:text-lg'>{post.excerpt}</p>
      {author && (
        <div className='flex items-center'>
          <div className='relative h-12 w-12'>
            <Image
              src={author.image}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <div className='px-6 text-base-100 flex gap-4 justify-center items-center'>
            <p className='font-bold'>by {author.name}</p>
            <span>|</span>
            <p className=''>
              {new Date(post.CreatedAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
