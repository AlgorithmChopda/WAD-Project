import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  return res.status(200).json({ message: 'In login controller' });
};

export const register = (req: Request, res: Response) => {
  return res.status(200).json({ message: 'In register controller' });
};
