import { Request, Response } from 'express';
import * as userServices from '../services/user.services';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'please enter all field' });
  }

  try {
    const user = await userServices.findUser(email, password);

    // if no such user found.
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Incorrect Username or Password' });
    }

    return res.status(200).json({ message: 'User login successful' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong.....' });
  }
};

export const register = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).json({ message: 'please enter all field' });
  }

  try {
    await userServices.register({ username, password, email });
    return res
      .status(200)
      .json({ message: 'user account created successfully' });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error during Deletion, Please try again later' });
  }
};
