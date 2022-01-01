export interface PostType {
  title: string;
  author: {
    name: string;
    picture: string;
  };
  coverImage: { asset: { url: string }; _type: string };
  date: string;
  excerpt: [];
  slug: string;
}
