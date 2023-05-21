import hotelModel from '../models/hotel.model';
import { IHotel } from '../types/user.types';

export const add = (data: IHotel) => {
  return hotelModel.create(data);
};

export const getHotel = (location: string) => {
  return hotelModel.find({ location });
};
