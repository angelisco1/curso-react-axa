import { useRef } from "react"


const FormularioNoControlado = () => {
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(usernameRef)

    const datos = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    console.log(datos)
  }

  return (
    <div>
      <h3>Formulario no controlado</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={usernameRef} />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" ref={emailRef} />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>

        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default FormularioNoControlado