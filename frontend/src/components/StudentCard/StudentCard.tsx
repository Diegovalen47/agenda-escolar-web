import React from "react";
import { Student } from "../../models/student.model";
import { trpc } from "../../utilities/trpc";

export function StudentCard({...student}: Student) {

  const deleteStudent = trpc.useMutation(["deleteStudent"])

  const handleOnClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {

    deleteStudent.mutate(
      student.studentId
    )

    window.location.reload();

  }

  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-header">
            {`${student.name} ${student.lastName}`}
          </div>
          <div className="card-body">
            {student.email? student.email : 'No hay correo registrado'}
          </div>
          <div className="card-footer">
            <div className="row">
              <button type="button" data-toggle="modal" data-target=".bd-example-modal-sm" className="col">
                Editar
              </button>
              <button type="button" className="col" onClick={handleOnClickDelete}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div 
        className="modal fade bd-example-modal-lg" 
        role="dialog"
        aria-labelledby="myLargeModalLabel" 
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            Hola soy un modal
          </div>
        </div>
      </div>
    </>
  )
}