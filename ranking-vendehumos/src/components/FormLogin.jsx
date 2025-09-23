import { useContext, useState } from "react"
import { UsuarioContext } from "../contexts"

const usuariosRegistrados = [
  { id: 1, username: 'cfalco', password: '1234', nombre: 'Charly Falco' },
  { id: 2, username: 'mike', password: '1234', nombre: 'Mike Kozinski' },
]


// const FormLogin = ({onLogin}) => {
const FormLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUsuario } = useContext(UsuarioContext)


  const handleSubmit = (event) => {
    event.preventDefault()

    // const usuarioLogueado = usuariosRegistrados.find(usuario => usuario.username === username && usuario.password === password)

    // if (!usuarioLogueado) {
    //   // TODO:
    //   return
    // }

    // delete usuarioLogueado.password
    // onLogin(usuarioLogueado)
    // setUsuario(usuarioLogueado)

    onLogin({email: username, password})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onInput={(event) => setUsername(event.target.value)} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onInput={(event) => setPassword(event.target.value)} />
        </div>

        <button type="submit">Login</button>

      </form>
    </div>
  )
}

export default FormLogin