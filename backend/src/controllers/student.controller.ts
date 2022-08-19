import { Request, Response } from "express";
import { connect, queries } from "../database";
import { Student } from "../interfaces/student.interface";

export async function getStudents(req: Request, res: Response): Promise<Response> {

  try {

    const conn = await connect();
    const students = await conn.query(queries.getAllStudets);
  
    return res.json(students[0])
  
  } catch (error: any) {
    
    res.status(500)
    res.send(error.message)

    return res

  }

}