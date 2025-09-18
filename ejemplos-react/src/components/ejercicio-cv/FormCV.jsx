import { useState } from "react"

const FormCV = ({onHandleSubmit}) => {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const datos = {
      nombre,
      apellido,
      email,
    }

    onHandleSubmit(datos)
  }

  return (
    <div>
      <h3>Rellena tus datos</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onInput={(event) => setNombre(event.target.value)} />
        </div>

        <div>
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" value={apellido} onInput={(event) => setApellido(event.target.value)} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" value={email} onInput={(event) => setEmail(event.target.value)} />
        </div>

        <button type="submit">Previsualizar</button>
      </form>

    </div>
  )
}

export default FormCV