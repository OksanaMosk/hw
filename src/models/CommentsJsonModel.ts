
import {ICommentModel} from "./CommentModel.ts";

export interface ICommentsJsonModel {
  comments: ICommentModel[];
  total: number;
  skip: number;
  limit: number;
}
