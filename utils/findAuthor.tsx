import { IAuthor } from "types/author"

export const findAuthor = (authors: IAuthor[], postAuthor: string): IAuthor => {
  return authors?.find((author) => author.name === postAuthor) as IAuthor
}
