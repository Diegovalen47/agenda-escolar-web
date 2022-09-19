import { useEffect, useState } from "react"
import { Card, Container } from "react-bootstrap"
import { SignUpForm } from "../components/SignUpForm/SignUpForm"
import { Student } from "../models/student.model"

export function Register() {

  return (
    <Container>
      <Card className="w-50" style={{margin: "0 auto"}}>
        <Card.Body>
          <Card.Title style={{ textAlign: "center"} }>
              Sign Up
          </Card.Title>
          <SignUpForm />
        </Card.Body>
      </Card>
    </Container>
  )  
}