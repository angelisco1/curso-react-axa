import { useState } from 'react'
import { useNavigate } from 'react-router'
import VendehumosService from '../services/vendehumos.service'

const NuevoVendehumo = () => {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState("")
  const [categoria, setCategoria] = useState("")


  const handleSubmit = async (event) => {
    event.preventDefault()

    // Petición HTTP Post
    try {

      const vendehumoCreado = await VendehumosService.create({
        nombre,
        categoria,
        numVotos: 0,
        imagen: Math.random() > 0.5 ? 'https://xsgames.co/randomusers/avatar.php?g=male' : 'https://xsgames.co/randomusers/avatar.php?g=female',
        usuarioId: 1
      })
      // .then((vendehumoCreado) => {
        //   // navigate('/')
        //   navigate('/vendehumos/' + vendehumoCreado.id)
        // })
        navigate('/vendehumos/' + vendehumoCreado.id)
    } catch (err) {
      console.log('error', err)
    }

    // setTimeout(() => {
    //   navigate('/')
    // }, 1500)
  }

  return (
    <div>
      <h2>Nuevo vendehumo</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onInput={(event) => setNombre(event.target.value)} />
        </div>

        <div>
          <label htmlFor="categoria">Categoria:</label>
          <select value={categoria} onChange={(event) => setCategoria(event.target.value)}>
            <option value="" disabled>Selecciona una categoría</option>
            <option value="crypto">Crypto</option>
            <option value="trading">Trading</option>
            <option value="ingles">Inglés</option>
          </select>
        </div>

        <button type="submit">Guardar</button>
      </form>

    </div>
  )
}

export default NuevoVendehumo