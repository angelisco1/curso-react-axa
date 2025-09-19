import { useNavigate } from 'react-router'

const NuevoVendehumo = () => {
  const navigate = useNavigate()


  const handleSubmit = () => {
    // Petición HTTP Post
    setTimeout(() => {
      navigate('/')
    }, 1500)
  }

  return (
    <div>
      <h2>Nuevo vendehumo</h2>

      {/* Form aquí */}

      <button type="button" onClick={handleSubmit}>Guardar</button>

    </div>
  )
}

export default NuevoVendehumo