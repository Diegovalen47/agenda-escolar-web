import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Student } from "../../models/student.model";
import { trpc } from "../../utilities/trpc";
import "./SignUpFormStyles.css";

type SingUpFormProps = {
  action: "createStudent" | "updateStudent"
}


export function SignUpForm({action}: SingUpFormProps) {

  const [student, setStudent] = useState({
    studentId: "",
    password: "",
    name: "",
    lastName: "",
    email: ""
  })


  const query = trpc.useMutation([action])

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {

    event.preventDefault()

    query.mutate({
      ...student,
      studentId: Number(student.studentId),
      email: student.email === ""? undefined : student.email
    })

    setStudent({
      studentId: "",
      password: "",
      name: "",
      lastName: "",
      email: ""
    })

    if(action === "updateStudent") {
      window.location.reload();
    }

  };

  const handleOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {

    var identificador = event.target.id
    var valor = event.target.value

    console.log(valor)

    if (identificador === "studentId") {
      var studentId = valor
      setStudent({
        ...student,
        studentId: studentId
      })
    }
    else if(identificador === "studentName") {
      var name = valor
      setStudent({
        ...student,
        name: name
      })
    }
    else if(identificador === "studentLastName") {
      var lastName = valor
      setStudent({
        ...student,
        lastName: lastName
      })
    }
    else if(identificador === "studentPass") {
      var password = valor
      setStudent({
        ...student,
        password: password
      })
    }
    else {
      var email = valor
      setStudent({
        ...student,
        email: email
      })
    }

  }
  
  return (

    <form onSubmit={handleSubmit}>

      <div className="columna">
        <label htmlFor="studentId">Student Id</label>
        <input
          type="number"
          id="studentId"
          value={student.studentId}
          placeholder="Ingrese su id de estudiante"
          onChange={handleOnChange}
          required
        />
      </div>

      <div className="fila">
        <div className="columna">
          <label htmlFor="studentName">Nombres</label>
          <input 
            type="text" 
            id="studentName"
            value={student.name}
            placeholder="Nombres" 
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="columna">
          <label htmlFor="studentLastName">Apellidos</label>
          <input 
            type="text" 
            id="studentLastName"
            value={student.lastName}
            placeholder="Apellidos" 
            onChange={handleOnChange}
            required
          />
        </div>
      </div>

      <div className="columna">
        <label htmlFor="studentPass">Clave</label>
        <input 
          type="password" 
          id="studentPass"
          value={student.password}
          placeholder="Clave" 
          onChange={handleOnChange}
          required
        />
      </div>

      <div className="columna">
        <label htmlFor="studentEmail">E-mail</label>
        <input 
          type="email" 
          id="studentEmail"
          value={student.email? student.email : ""}
          placeholder="Correo electronico" 
          onChange={handleOnChange}
        />
      </div>

      <button type="submit">
        Registrarse
      </button>

      <div className="message">
        Mensajito
      </div>

    </form>

  )
}