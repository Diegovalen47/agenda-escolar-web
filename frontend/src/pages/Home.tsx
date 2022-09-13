import { useEffect, useState } from "react"
import { Student } from "../models/student.model"

export function Home() {

  // damos la direccion del localhost
  const url:string = 'http://localhost:4000/students'

  // Variable para guardar el arreglo de items
  const [studentItems, setStudentItems] = useState<Student[]>([])

  // funcion asincronica para obtener los datos de la API
  const fetchApi = async () => {

    const response = await fetch(url)
    // Obtenemos la respuesta en formato json
    const responseJSON = await response.json()
    // Guardamos esta respuesta en storeItems
    // haciendo el respectivo casteo de object a storeItem
    setStudentItems(responseJSON as Student[])
  }

  // Utilizamos el useEfect para cargar los datos
  // solo una vez al cargar la pagina
  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
    {
      studentItems.map((student, index) => (
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