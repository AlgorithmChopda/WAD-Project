import { Router } from 'express';
import * as userController from '../controller/user.controller';
const router = Router();

router.post('/login', userController.login);
router.post('/register', userController.register);


export default router;