import { Student } from "../models/student.model"
import { trpc } from "../trpc"

export function Home() {

  const getStudents = trpc.useQuery(['getStudents'])

  return (
    <>
    {
      getStudents.data?.map((student: Student, index: number) => (
        <p key={index}>
          {student.name}
          {' '}
          {student.lastName}
        </p>
      ))
    }
    </>
  )
}