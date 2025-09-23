import { useEffect, useState } from "react"
import { Link, Outlet, useSearchParams } from "react-router"
import VendehumoCard from "../components/VendehumoCard"
import { useDispatch, useSelector } from 'react-redux'
import { filtrarVendehumos, inicializarVendehumos } from "../store/vendehumos/actions"

const Home = () => {
  // const [vendehumos, setVendehumos] = useState([])
  const [qParams, setQParams] = useSearchParams()
  console.log(qParams.get('numVotos'))

  const dispatch = useDispatch()
  const vendehumos = useSelector((state) => {
    console.log({state})
    return state.vendehumosReducer.vendehumosFiltrados
  })


  // console.log(qParams.keys().next())
  // console.log(qParams.values().next())

  const categoriaSeleccionada = qParams.get('categoria') || ''

  // useEffect(() => {
  //   fetch('http://localhost:3000/vendehumos')
  //     .then((resp) => {
  //       return resp.json()
  //     })
  //     .then((data) => {
  //       setVendehumos(data)
  //     })
  // }, [])

  useEffect(() => {
    dispatch(inicializarVendehumos())
    // let url = 'http://localhost:3000/vendehumos'
    // fetch(url)
    //   .then((resp) => {
    //     return resp.json()
    //   })
    //   .then((data) => {
    //     // setVendehumos(data)
    //     const accion = inicializarVendehumos(data)
    //     console.log({accion})
    //     dispatch(accion)
    //     // dispatch({type: 'NO_EXISTE', payload: null})
    //   })
  }, [])

  useEffect(() => {
    const accion = filtrarVendehumos(categoriaSeleccionada)
    dispatch(accion)
  }, [qParams])

  // useEffect(() => {
  //   let url = 'http://localhost:3000/vendehumos'
  //   if (categoriaSeleccionada) {
  //     url += '?categoria=' + categoriaSeleccionada
  //   }
  //   console.log('pasa por aqui', categoriaSeleccionada)

  //   if (!categoriaSeleccionada) {
  //     fetch(url)
  //       .then((resp) => {
  //         return resp.json()
  //       })
  //       .then((data) => {
  //         // setVendehumos(data)
  //         const accion = inicializarVendehumos(data)
  //         console.log({accion})
  //         dispatch(accion)
  //         // dispatch({type: 'NO_EXISTE', payload: null})
  //       })
  //   } else {
  //     const accion = filtrarVendehumos(categoriaSeleccionada)
  //     dispatch(accion)
  //   }
  // }, [qParams])

  return (
    <div>
      <h2>Home</h2>

      <select value={categoriaSeleccionada} onChange={(event) => setQParams({categoria: event.target.value})}>
        <option value="">Sin filtro</option>
        <option value="crypto">Crypto</option>
        <option value="trading">Trading</option>
        <option value="ingles">Inglés</option>
      </select>


      <div className="d-flex justify-content-space-between align-items-center">

        {/* <ul className="mx-1">
          {vendehumos.map(vh => (
            <li key={vh.id}>
              {vh.nombre} <Link to={"/vendehumos/" + vh.id}>+ info</Link>
            </li>
          ))}
        </ul> */}

        <div className="d-flex justify-content-space-evenly">
          {vendehumos.map(vendehumo => <VendehumoCard key={vendehumo.id} vh={vendehumo} />)}
        </div>

        <Outlet className="mx-1" />

      </div>
    </div>
  )
}

export default Home