import { Router } from 'express';
import * as hotelController from '../controller/hotel.controller';

const router = Router();

router.get('/', hotelController.getData);
router.post('/', hotelController.addHotel);

export default router;
