import { Student } from "../models/student.model"
import { trpc } from "../trpc"

export function Home() {

  const getStudents = trpc.useQuery(['getStudents'])

  return (
    <>
    {
      getStudents.data?.map((student: Student) => (
        <p key={student.studentId} id={student.studentId.toString()}>
          {student.name}
          {' '}
          {student.lastName}
        </p>
      ))
    }
    </>
  )
}