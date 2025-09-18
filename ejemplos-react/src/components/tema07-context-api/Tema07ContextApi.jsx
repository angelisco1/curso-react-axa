import { useState } from "react"
import CmpIntermedio from "./CmpIntermedio"
import { IdiomaContext } from "./contexts/IdiomaContext"

const Tema07ContextApi = () => {
  const [idioma, setIdioma] = useState('es')

  return (
    <div>
      <h2>Tema 07: Context API y useContext</h2>

      <select value={idioma} onChange={(event) => setIdioma(event.target.value)}>
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="it">Italiano</option>
      </select>

      <hr></hr>

      <IdiomaContext.Provider value={{idioma, setIdioma}}>
        <CmpIntermedio />
      </IdiomaContext.Provider>

      {/* OtroComponente */}


    </div>
  )
}

export default Tema07ContextApi