import { useMemo, useState } from "react"
import FormCV from "./FormCV"
import PreviewCV from "./PreviewCV"
import FormCV2 from "./FormCV2"



const EjercicioCV = () => {
  const [nombre, setNombre] = useState('Ángel')
  const [apellido, setApellido] = useState('Villalba')
  const [email, setEmail] = useState('angel@gmail.com')

  const setDatos = (datos) => {
    setNombre(datos.nombre)
    setApellido(datos.apellido)
    setEmail(datos.email)
  }

  // const getNombreCompleto = () => {
  //   console.log('PASA POR AQUÍ')
  //   return `${nombre} ${apellido}`
  // }

  // const nombreCompleto = getNombreCompleto()

  const nombreCompleto = useMemo(() => {
    console.log('PASA POR AQUÍ')
    return `${nombre} ${apellido}`
  }, [nombre, apellido])

  return (
    <div>
      <h2>Ejercicio CV</h2>

      <FormCV onHandleSubmit={setDatos} />

      <FormCV2 nombre={nombre} apellido={apellido} email={email} setNombre={setNombre} setApellido={setApellido} setEmail={setEmail} />

      {/* <PreviewCV nombreCompleto={nombre + ' ' + apellido} email={email} /> */}
      <PreviewCV nombreCompleto={nombreCompleto} email={email} />
    </div>
  )
}

export default EjercicioCV