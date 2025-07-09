import {IPostModel} from "./PostModel.ts";

export interface IPostsJsonModel {
  posts: IPostModel[];
  total: number;
  skip: number;
  limit: number;
}
