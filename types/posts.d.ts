export interface IPost {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null;
  title: string;
  excerpt: string;
  body: string;
  tags: string[];
  views: number;
  author: string;
  cover: string;
  coverURL: string;
  likes: number;
  slug: string;
}
