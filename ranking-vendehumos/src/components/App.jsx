import { lazy, Suspense, useContext, useEffect, useState } from "react"
import FormLogin from "./FormLogin"
import Header from "./Header"
import { UsuarioContext } from "../contexts"
import Bienvenida from "./Bienvenida"
import { Navigate, Outlet, Route, Routes } from "react-router"
import Home from "../pages/Home"
// import NuevoVendehumo from "../pages/NuevoVendehumo"
import DetalleVendehumo from "../pages/DetalleVendehumo"
import MiPerfil from "../pages/MiPerfil"
import Error from "../pages/Error"
import Modal from "./Modal"

const NuevoVendehumo = lazy(() => import('../pages/NuevoVendehumo'))

const App = () => {
  const [usuario, setUsuario] = useState(null)
  const [logueando, setLogueando] = useState(false)
  // const { usuario } = useContext(UsuarioContext)

  useEffect(() => {
    if (usuario) {
      setLogueando(false)
    }
  }, [usuario])

  const handleLogin = (datosLogin) => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosLogin)
    })
      .then(resp => resp.json())
      .then(datos => {
        console.log(datos)
        localStorage.setItem('token', datos.token)
        setLogueando(false)
      })
  }

  return (
    <div>


      <Header setLogueando={setLogueando} />

      {/* {logueando && <FormLogin onLogin={setUsuario} />} */}
      <UsuarioContext.Provider value={{usuario, setUsuario}}>
        {/* {logueando && <FormLogin />} */}
        {logueando && <Modal title="Logueate">
          <FormLogin onLogin={handleLogin} />
          {/* <NuevoVendehumo /> */}
          {/* <button>Un botón</button> */}
        </Modal>}
        {/* {usuario && <Bienvenida />} */}
      </UsuarioContext.Provider>

      {/* {usuario && <Bienvenida />} */}

      <Suspense fallback={<p>Loading...</p>}>
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
      </Suspense>

    </div>
  )
}

export default App