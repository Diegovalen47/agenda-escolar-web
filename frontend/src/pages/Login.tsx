import { Card, Container, Form, InputGroup } from "react-bootstrap";
import { SignInForm } from "../components/SignInForm";

export function Login() {

  return (
    <Container>
      <Card className="w-50" style={{margin: "0 auto"}}>
        <Card.Body>
          <Card.Title style={{ textAlign: "center"} }>
              Sign In
          </Card.Title>
          <SignInForm />
        </Card.Body>
      </Card>
    </Container>
  )  
}