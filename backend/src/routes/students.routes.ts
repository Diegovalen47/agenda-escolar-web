import { Router } from "express";
import * as controllerStudent from '../controllers/student.controller';

const router = Router();

router.route('/')
  .get(controllerStudent.getStudents)
  .post(controllerStudent.createNewStudent)

router.route('/:studentId')
  .get(controllerStudent.getStudentById)
  .delete(controllerStudent.deleteStudent)
  .put(controllerStudent.updateStudent)

export default router;