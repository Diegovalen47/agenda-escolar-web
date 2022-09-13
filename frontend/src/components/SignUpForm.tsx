import { useState } from "react";
import { Button, Col, Form, InputGroup, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Student } from "../models/student.model";

export function SignUpForm() {


  function cssForm(flex_direcion: string = "column"): any {

    var formGroupStyles  = {
      display : "flex",
      flexDirection : flex_direcion,
      justifyContent : "space-between"
    }

    return formGroupStyles
  }

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {

    event.preventDefault

  };
  
  return (

    <form onSubmit={handleSubmit}>

      <div style={cssForm()}>
        <label htmlFor="studentId">Student Id</label>
        <input type="number" id="studentId" placeholder="Ingrese su id de estudiante" required />
      </div>

      <div style={cssForm("row")}>
        <div style={cssForm()}>
          <label htmlFor="studentName">Nombres</label>
          <input type="text" id="studentName" placeholder="Nombres" required />
        </div>
        <div style={cssForm()}>
          <label htmlFor="studentLastName">Apellidos</label>
          <input type="text" id="studentLastName" placeholder="Apellidos" required />
        </div>
      </div>

      <div style={cssForm()}>
        <label htmlFor="studentPass">Clave</label>
        <input type="password" id="studentPass" placeholder="Ingrese su contraseña" required />
      </div>

    </form>

  )
}