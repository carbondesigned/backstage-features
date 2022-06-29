import Layout from "components/Layouts/Layout"
import { PostHeader } from "components/Layouts/PostHeader"
import Loading from "components/Loading"
import { useAuthors } from "hooks/useGetAuthors"
import { usePost } from "hooks/useGetPost"
import { NextPage } from "next"
import Head from "next/head"
import { IAuthor } from "types/author"
import { useClientRouter } from "use-client-router"
import { findAuthor } from "utils/findAuthor"
import { MarkdownComponent } from "utils/Markdown"

const Post: NextPage = () => {
  const router = useClientRouter()
  const { id } = router.query
  const { data: post, isLoading, error } = usePost(id as string)
  const { data: authors } = useAuthors()
  const author = findAuthor(authors as IAuthor[], post?.author as string)
  return (
    <>
      <Head>
        <title>{post?.title} | Backstage Features by Gracie Lowes</title>
      </Head>
      <Layout>
        {isLoading && <Loading />}
        {!isLoading && !error && post && (
          <>
            <PostHeader post={post} author={author} />
            <article className='text-base-100 post-body'>
              <MarkdownComponent>{post.body}</MarkdownComponent>
            </article>
          </>
        )}
      </Layout>
    </>
  )
}

export default Post
