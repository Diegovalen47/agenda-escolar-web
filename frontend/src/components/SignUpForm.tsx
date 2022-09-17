import { useState } from "react";
import { Button, Col, Form, InputGroup, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Student } from "../models/student.model";
import { trpc } from "../trpc";

export function SignUpForm() {

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const createStudent = trpc.useMutation(["createStudent"])

  const cssForm = (flex_direcion: string = "column"): any => {

    var formGroupStyles  = {
      display : "flex",
      flexDirection : flex_direcion,
      justifyContent : "space-between"
    }

    return formGroupStyles
  }

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {

    event.preventDefault

    createStudent.mutate({
      studentId: Number(studentId),
      password: password,
      name: name,
      lastName: lastName,
      email: email !== ""? email : undefined
    })

  };
  
  return (

    <form onSubmit={handleSubmit}>

      <div style={cssForm()}>
        <label htmlFor="studentId">Student Id</label>
        <input
          type="number"
          id="studentId"
          placeholder="Ingrese su id de estudiante"
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
      </div>

      <div style={cssForm("row")}>
        <div style={cssForm()}>
          <label htmlFor="studentName">Nombres</label>
          <input 
            type="text" 
            id="studentName" 
            placeholder="Nombres" 
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={cssForm()}>
          <label htmlFor="studentLastName">Apellidos</label>
          <input 
            type="text" 
            id="studentLastName" 
            placeholder="Apellidos" 
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>

      <div style={cssForm()}>
        <label htmlFor="studentPass">Clave</label>
        <input 
          type="password" 
          id="studentPass" 
          placeholder="Clave" 
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div style={cssForm()}>
        <label htmlFor="studentEmail">E-mail</label>
        <input 
          type="email" 
          id="studentEmail" 
          placeholder="Correo electronico" 
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">
        Registrarse
      </button>

      <div className="message">
        {message ? <p>{message}</p> : null}
      </div>

    </form>

  )
}