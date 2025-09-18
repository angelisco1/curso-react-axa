
const Header = ({ setLogueando }) => {
  return (
    <div>
      <button type="button" onClick={() => setLogueando(true)}>Login</button>
    </div>
  )
}

export default Header