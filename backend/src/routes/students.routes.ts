import { Router } from "express";
import * as controllerStudent from '../controllers/student.controller';

const router = Router();

router.route('/')
  .get(controllerStudent.getStudents)

export default router;