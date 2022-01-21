import client, { previewClient } from "./sanity";

const getUniquePosts = (posts: any[]) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`;

const getClient = (preview: any) => (preview ? previewClient : client);

export async function getPosts(preview: any) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
        ${postFields}
        excerpt
      }`);
  return getUniquePosts(results);
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return data;
}

export async function getPostAndMorePosts(slug: string, preview: any) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
          ${postFields}
          body,
          'comments': *[
                        _type == "comment" && 
                        post._ref == ^._id && 
                        approved == true] {
            _id, 
            name, 
            email, 
            comment, 
            _createdAt
          }
        }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
          ${postFields}
          body,
        }[0...2]`,
      { slug }
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}