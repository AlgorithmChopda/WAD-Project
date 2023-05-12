import { IUser } from '../types/user.types';
import userModel from '../models/user.model';

export const register = (user: IUser) => {
  userModel.create(user);
};

export const findUser = (email: string, password: string) => {
  return userModel.findOne({ email, password });
};
