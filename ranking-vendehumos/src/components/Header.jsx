import { useEffect, useState } from "react"
import { Link } from "react-router"

const Header = ({ setLogueando }) => {
  const [estaLogueado, setEstaLogueado] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setEstaLogueado(token !== null)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setEstaLogueado(false)
  }

  return (
    <div className="d-flex justify-content-space-between align-items-center">
      <div>
        <h1>Ranking vendehumos</h1>
      </div>

      <div>
        {/* <a href="/">Home</a>
        <a href="/nuevo-vendehumo">Nuevo vendehumo</a> */}
        <Link className="mx-1" to="/vendehumos">Home</Link>

        {estaLogueado && (<>
            <Link className="mx-1" to="/nuevo-vendehumo">Nuevo vendehumo</Link>
            <Link className="mx-1" to="/mi-perfil">Mi perfil</Link>
            <button type="button" className="mx-1" onClick={handleLogout}>Logout</button>
          </>)}

        {!estaLogueado && <button type="button" className="mx-1" onClick={() => setLogueando(true)}>Login</button>}
      </div>
    </div>
  )
}

export default Header