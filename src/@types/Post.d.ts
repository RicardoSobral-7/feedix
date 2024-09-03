export type Author = {
  avatar_url: string,
  name: string,
  role: string
}

export type Content = {
  type: string,
  content: string
}

export interface IPost {
  published: Date
  content: string
  author: Author
  content: Content[]
  publishedAt: Date
}

