import { useState } from "react"

const FormCV2 = ({nombre, apellido, email, setNombre, setApellido, setEmail}) => {

  return (
    <div>
      <h3>Rellena tus datos 2</h3>

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

    </div>
  )
}

export default FormCV2