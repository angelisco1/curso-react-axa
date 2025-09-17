import { useEffect, useState } from "react"
import useInputField from "./hooks/useInputField"



const FormularioControlado = () => {
  // useState({
  //   username: '',
  //   email: '',
  //   password: ''
  // })
  // const [username, setUsername] = useState('pacome')
  // const [email, setEmail] = useState('')
  const [username, setUsername, erroresUsername] = useInputField('pacome', {minLength: 3})
  const [email, setEmail, erroresEmail] = useInputField('', {email: true})
  const [password, setPassword, erroresPassword, pwModified] = useInputField('', {minLength: 8, needMayus: true, needSymbols: true})


  // const [password, setPassword] = useState('')
  // const [erroresPassword, setErroresPassword] = useState([])

  // useEffect(() => {

  //   const mensajesError = []

  //   if (password.length < 8) {
  //     mensajesError.push('Tiene que tener una longitud mínima de 8')
  //   }

  //   if (!password.includes('.') && !password.includes(',')) {
  //     mensajesError.push('Tiene que tener al menos un símbolo: . o ,')
  //   }

  //   if (password.toLowerCase() === password) {
  //     mensajesError.push('Tiene que tener al menos una mayúscula')
  //   }

  //   setErroresPassword(mensajesError)

  // }, [password])

  const handleSubmit = (event) => {
    event.preventDefault()

    const datos = {
      username,
      email,
      password,
    }
    console.log(datos)
  }


  return (
    <div>
      <h3>Formulario controlado</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={username} onInput={(event) => setUsername(event.target.value)} />

          {erroresUsername.length > 0 && <ul>
            {erroresUsername.map((err, i) => <li key={i}>{err}</li>)}
          </ul>}

        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={email} onInput={(event) => setEmail(event.target.value)} />

          {erroresEmail.length > 0 && <ul>
            {erroresEmail.map((err, i) => <li key={i}>{err}</li>)}
          </ul>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onInput={(event) => setPassword(event.target.value)} />
          {erroresPassword.length > 0 && pwModified && <ul>
            {erroresPassword.map((err, i) => <li key={i}>{err}</li>)}
          </ul>}
        </div>

        <button type="submit" disabled={erroresPassword.length > 0 || erroresUsername.length > 0}>Sign up</button>
      </form>
    </div>
  )
}

export default FormularioControlado