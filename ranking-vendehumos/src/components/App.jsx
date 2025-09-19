import { useContext, useEffect, useState } from "react"
import FormLogin from "./FormLogin"
import Header from "./Header"
import { UsuarioContext } from "../contexts"
import Bienvenida from "./Bienvenida"
import { Navigate, Outlet, Route, Routes } from "react-router"
import Home from "../pages/Home"
import NuevoVendehumo from "../pages/NuevoVendehumo"
import DetalleVendehumo from "../pages/DetalleVendehumo"
import MiPerfil from "../pages/MiPerfil"
import Error from "../pages/Error"

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

      <Routes>

        <Route path="/vendehumos" Component={Home}>
          <Route path=":id" element={<DetalleVendehumo />} />
        </Route>


        <Route path="/nuevo-vendehumo" element={<NuevoVendehumo />} />
        {/* <Route path="/vendehumos/:id" element={<DetalleVendehumo />} /> */}

        {usuario && <Route path="/mi-perfil" element={<MiPerfil />} />}

        {/* Redirección de / a /vendehumos */}
        <Route path="/" element={<Navigate to="/vendehumos" />} />

        <Route path="*" element={<Error />} />
      </Routes>

    </div>
  )
}

export default App