import { IUser } from '../../model/user';

export interface IUserHelper {
    isInRole(user:IUser, role: string): boolean;
}