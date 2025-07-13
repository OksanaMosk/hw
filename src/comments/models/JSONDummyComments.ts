import {ICommentDummyModel} from "./CommentDummyModel.ts";

export interface IJSONDummyComments {
    comments: ICommentDummyModel[];
    total: number;
    skip: number;
    limit: number;
}
