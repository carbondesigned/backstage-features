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
  body?: [];
}

export interface VideoType {
  contentDetails: any;
  videoId: string;
  publishedAt: string;
}
