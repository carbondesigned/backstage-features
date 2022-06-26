import { useAuthors } from "hooks/useGetAuthors"
import { useLikePost } from "hooks/useLikePost"
import Image from "next/image"
import { IAuthor } from "types/author"
import { IPost } from "types/posts"

type Props = {
  type: "normal" | "latest"
  post: IPost
}
export const Post = ({ type, post }: Props) => {
  const { data: authors } = useAuthors()
  const author = authors?.find((author) => author.name === post.author)
  return (
    <>
      {type === "normal" ? (
        <NormalPost post={post} author={author} />
      ) : (
        <div>latest</div>
      )}
    </>
  )
}

export const NormalPost = ({
  post,
  author,
}: {
  post: IPost
  author?: IAuthor
}) => {
  const { mutate: likePost } = useLikePost()
  return (
    <div className='bg-base-300 p-4 card text-base-100 rounded-xl'>
      {post.cover && (
        <figure className='w-full h-72 overflow-hidden rounded-xl relative'>
          <div className='inset-0 absolute bg-gradient-to-t from-black to-transparent z-30 pointer-events-none'></div>
          <div className='flex z-50 justify-between self-end w-full gap-2 p-4'>
            {post.tags[0].length > 0 && (
              <div className='flex z-50 items-center gap-2'>
                {post.tags[0]?.split(",").map((tag: string) => (
                  <span
                    className='px-6 py-2 bg-primary rounded-full text-xs'
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className='flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 fill-error'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                  clipRule='evenodd'
                />
              </svg>
              <span
                onClick={() => likePost(post.slug)}
                className='cursor-pointer w-10 h-10 grid place-items-center rounded-full bg-base-200'
              >
                {post.likes}
              </span>
            </div>
          </div>
          <Image
            src={post.cover}
            alt={post.title}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </figure>
      )}
      <div className='card-body px-0'>
        <div className='flex justify-between mt-2'>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-2 items-center'>
              {author && (
                <div className='flex gap-4 items-center'>
                  <div className='w-8 h-8 bg-base-200 rounded-full relative'>
                    <Image
                      src={author.image}
                      alt={author.name}
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                    />
                  </div>
                  <p className='font-bold'>
                    <span className='font-normal'> By </span>
                    {author.name}
                  </p>
                </div>
              )}
              <span>|</span>
              <span>
                {new Date(post.CreatedAt).toLocaleDateString(undefined, {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h4 className='text-2xl font-bold w-3/4'>{post.title}</h4>
          </div>
        </div>
        <p className='text-neutral-content'>{post?.excerpt}</p>
      </div>
    </div>
  )
}
