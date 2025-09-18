import { useContext } from "react"
import { UsuarioContext } from "../contexts"


const Bienvenida = () => {
  // const datosUsuario = useContext(UsuarioContext)
  // const usuario = datosUsuario.usuario
  // {usuario: {nombre: '', ...}, setUsuario: () => {}}
  const { usuario } = useContext(UsuarioContext)

  return (
    <div>

      {usuario && <p>Bienvenido {usuario.nombre}</p>}

      <UsuarioContext.Consumer>
        {({usuario}) => {
          console.log(usuario)
          return (<p>Hola {usuario.nombre}</p>)
        }}
        {/* {(datos) => {
          console.log(datos.usuario)
          return (<p>Hola {datos.usuario.nombre}</p>)
        }} */}
      </UsuarioContext.Consumer>

    </div>
  )
}

export default Bienvenida