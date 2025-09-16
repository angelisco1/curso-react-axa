import { useState } from "react"
import Contador from "./Contador"
import ContadorSinEstado from "./ContadorSinEstado"

const Tema03Estado = () => {
  const [cuenta, setCuenta] = useState(0)

  const handleIncrementar = (cuenta) => {
    console.log('Has pulsado el incrementar')
    // Petición POST
    setCuenta(cuenta)
  }

  return (
    <div>
      <h2>Tema 03: Estado</h2>

      <ContadorSinEstado cuenta={cuenta} changeCuenta={setCuenta} onIncrementar={handleIncrementar} />

      <Contador />

    </div>
  )
}

export default Tema03Estado