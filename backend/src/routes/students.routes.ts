import { Router } from "express";
import * as controllerStudent from '../controllers/student.controller';

const router = Router();

router.route('/')

router.route('/:studentId')

export default router;