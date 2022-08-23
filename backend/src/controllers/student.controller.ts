import { Request, Response } from "express";
import { connect, queries } from "../database";
import { Student } from "../interfaces/student.interface";

export async function getStudents(req: Request, res: Response): Promise<Response> {

  try {

    const conn = await connect();
    const response = await conn.query(queries.getAllStudets);
  
    return res.json(response[0])
  
  } catch (error: any) {
    
    res.status(500)
    res.send(error.message)

    return res

  }

}

export async function createNewStudent(req: Request, res: Response): Promise<Response> {

  const newStudent: Student = req.body

  try {

    const conn = await connect();
    conn.query('INSERT INTO `Student` SET ?', [newStudent])

    return res.json({
      message: 'Post created'
    })

  } catch (error: any) {

    res.status(500)
    res.send(error.message)

    return res

  }

}

export async function getStudentById(req: Request, res:Response): Promise<Response> {

  const studentId = req.params.studentId

  try {

    const conn = await connect();
    const response = await conn.query('SELECT * FROM `Student` WHERE studentId = ?', [studentId])

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

    const conn = await connect();
    await conn.query('DELETE FROM `Student` WHERE studentId = ?', [studentId])

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
  const conn = await connect()

  await conn.query('UPDATE `Student` SET ? WHERE studentId = ?', [updateStudent, studentId])

  return res.json({
    message: "Post updated"
  })

}