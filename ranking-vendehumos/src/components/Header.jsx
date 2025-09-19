import { Link } from "react-router"

const Header = ({ setLogueando }) => {
  return (
    <div className="d-flex justify-content-space-between align-items-center">
      <div>
        <h1>Ranking vendehumos</h1>
      </div>

      <div>
        {/* <a href="/">Home</a>
        <a href="/nuevo-vendehumo">Nuevo vendehumo</a> */}
        <Link className="mx-1" to="/vendehumos">Home</Link>
        <Link className="mx-1" to="/nuevo-vendehumo">Nuevo vendehumo</Link>

        <Link className="mx-1" to="/mi-perfil">Mi perfil</Link>
        <button type="button" className="mx-1" onClick={() => setLogueando(true)}>Login</button>

        {/* TODO: botón de logout */}
        {/* <button type="button" className="mx-1" onClick={() => setLogueando(false)}>Logout</button> */}
      </div>
    </div>
  )
}

export default Header