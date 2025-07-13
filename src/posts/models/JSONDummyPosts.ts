import { IPostDummyModel } from './PostDummyModel.ts';
export interface IPostsDummyJson {
    posts: IPostDummyModel[];
    total: number;
    skip: number;
    limit: number;
}
