import { useEffect, useState } from "react"
import { Link, Outlet, useSearchParams } from "react-router"

const Ranking = () => {
  // const [vendehumos, setVendehumos] = useState([])
  // const [qParams, setQParams] = useSearchParams()
  // console.log(qParams.get('numVotos'))
  // console.log(qParams.keys().next())
  // console.log(qParams.values().next())

  // const categoriaSeleccionada = qParams.get('categoria')



  // useEffect(() => {
  //   fetch('http://localhost:3000/vendehumos?categoria=' + categoriaSeleccionada)
  //     .then((resp) => {
  //       return resp.json()
  //     })
  //     .then((data) => {
  //       setVendehumos(data)
  //     })
  // }, [qParams])

  return (
    <div>
      <h2>Ranking</h2>
{/*
      <select value={categoriaSeleccionada} onChange={(event) => setQParams({categoria: event.target.value})}>
        <option value="crypto">Crypto</option>
        <option value="trading">Trading</option>
        <option value="ingles">Inglés</option>
      </select>


      <div className="d-flex justify-content-space-between align-items-center">

        <ul className="mx-1">
          {vendehumos.map(vh => (
            <li key={vh.id}>
              {vh.nombre} <Link to={"/vendehumos/" + vh.id}>+ info</Link>
            </li>
          ))}
        </ul>

      </div> */}

    </div>
  )
}

export default Ranking