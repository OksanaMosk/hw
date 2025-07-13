
import { IUserDummyModel } from './UserDummyModel.ts';

export interface IJSONDummyUsers {
    users: IUserDummyModel[];
    total: number;
    skip: number;
    limit: number;
}
