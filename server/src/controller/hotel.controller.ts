import { Request, Response } from 'express';
import hotelModel from '../models/hotel.model';

export const getData = async (req: Request, res: Response) => {
  const { dest } = req.body;
  if (!dest) {
    return res.status(400).json({ error: 'Please provide a destination' });
  }

  try {
    const data = await hotelModel.find({ location: dest });
    return res.status(200).json({ message: 'OK', data });
  } catch (err) {
    return res.status(500).json({ error: 'something went wrong' });
  }
};
