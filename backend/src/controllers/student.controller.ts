import { Request, Response } from "express";
import { connect, queries } from "../database";
import { Student } from "../interfaces/student.interface";
import { setHeaders } from "./headers.controler";

export async function getStudentsDatabase() {
  try {
    const conn = await connect();
    const response = await conn.query(queries.getAllStudets)
    return response[0]
  } catch (error: any) {
    return error.message
  }
}

export async function createNewStudentDatabase(student: Student) {

  const newStudent: Student = student

  try {
    const conn = await connect();
    const response = await conn.query(queries.createNewStudent, [newStudent])
    return response
  } catch (error: any) {
    return error.message
  }
}

export async function getStudentById(req: Request, res:Response): Promise<Response> {

  const studentId = req.params.studentId

  try {

    setHeaders(res)

    const conn = await connect();
    const response = await conn.query(queries.getStudentById, [studentId])

    return res.json(response[0])

  } catch (error: any) {
    
    res.status(500)
    res.send(error.message)

    return res

  }

}

export async function deleteStudent(req: Request, res: Response): Promise<Response> {

  const studentId = req.params.studentId;

  try {

    setHeaders(res)

    const conn = await connect();
    await conn.query(queries.deleteStudent, [studentId])

    return res.json({
      message : 'Post deleted'
    })

  } catch (error: any) {

    res.status(500)
    res.send(error.message)

    return res

  }

}

export async function updateStudent(req: Request, res: Response): Promise<Response> {

  const studentId = req.params.studentId
  const updateStudent: Student = req.body

  try {

    setHeaders(res)

    const conn = await connect()

    await conn.query(queries.updateStudent, [updateStudent, studentId])
  
    return res.json({
      message: "Post updated"
    })

  } catch (error: any) {

    res.status(500)
    res.send(error.message)

    return res

  }

}