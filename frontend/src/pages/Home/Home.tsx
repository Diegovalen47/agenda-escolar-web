import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { StudentCard } from "../../components/StudentCard/StudentCard"
import { Student } from "../../models/student.model"
import { trpc } from "../../utilities/trpc"
import "./HomeStyles.css";

export function Home() {

  const getStudents = trpc.useQuery(['getStudents'])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="row">
      {
        getStudents.data?
          getStudents.data.map((student: Student) => (
            <StudentCard {...student} key={student.studentId}/>
          )) 
        : 
        <div>
          No hay studiantes registrados en el momento
        </div>
      }
      </div>

      <Button variant="primary" onClick={handleShow}>
        Update Student
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm action={"updateStudent"}/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

    </>
  )
}