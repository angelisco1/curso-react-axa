import { useContext, useEffect, useState } from "react"
import FormLogin from "./FormLogin"
import Header from "./Header"
import { UsuarioContext } from "../contexts"
import Bienvenida from "./Bienvenida"

const App = () => {
  const [usuario, setUsuario] = useState(null)
  const [logueando, setLogueando] = useState(false)
  // const { usuario } = useContext(UsuarioContext)

  useEffect(() => {
    if (usuario) {
      setLogueando(false)
    }
  }, [usuario])

  return (
    <div>
      <Header setLogueando={setLogueando} />

      {/* {logueando && <FormLogin onLogin={setUsuario} />} */}
      <UsuarioContext.Provider value={{usuario, setUsuario}}>
        {logueando && <FormLogin />}
        {usuario && <Bienvenida />}
      </UsuarioContext.Provider>

      {/* {usuario && <Bienvenida />} */}

    </div>
  )
}

export default App