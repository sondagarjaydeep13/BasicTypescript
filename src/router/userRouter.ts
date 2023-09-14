import express, { Router } from 'express';
const router: Router = express.Router();
import { signin } from '../controller/userController';

router.post('/signup', signin);

export default router;