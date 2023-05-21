import mongoose, { Schema } from 'mongoose';
import { IHotel } from '../types/user.types';

const hotelSchema = new Schema<IHotel>({
  name: { type: String, required: true },
  address: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<IHotel>('hotel', hotelSchema);
