import { useContext } from "react"
import CmpFinal from "./CmpFinal"
import { IdiomaContext } from "./contexts/IdiomaContext"

const CmpIntermedio = () => {
  const { setIdioma } = useContext(IdiomaContext)

  return (
    <div>
      <h3>Cmp Intermedio</h3>

      <button type="button" onClick={() => setIdioma('en')}>Cambiar a inglés</button>

      <CmpFinal />
    </div>
  )
}

export default CmpIntermedio