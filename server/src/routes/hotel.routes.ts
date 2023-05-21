import { Router } from 'express';
import * as hotelController from '../controller/hotel.controller';

const router = Router();

router.post('/', hotelController.getData);
router.post('/add', hotelController.addHotel);

export default router;
