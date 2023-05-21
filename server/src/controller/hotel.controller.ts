import { Request, Response } from 'express';
import hotelModel from '../models/hotel.model';
import { IHotel } from '../types/user.types';
import * as hotelServices from '../services/hotel.services';

export const getData = async (req: Request, res: Response) => {
  const { dest } = req.body;
  if (!dest) {
    return res.status(400).json({ error: 'Please provide a destination' });
  }

  //TODO: add the service folder for the hotel controller
  try {
    const data = await hotelServices.getHotel(dest);
    return res.status(200).json({ message: 'OK', data });
  } catch (err) {
    return res.status(500).json({ error: 'something went wrong' });
  }
};

export const addHotel = async (req: Request, res: Response) => {
  const { name, location, address, description } = req.body;

  const data: IHotel = {
    name,
    location,
    address,
    description,
  };
  try {
    await hotelServices.add(data);
    return res.status(200).json({ message: 'hotel added successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};
