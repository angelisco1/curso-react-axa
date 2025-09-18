import { useContext } from "react"
import { IdiomaContext } from "./contexts/IdiomaContext"
import { traducir } from "./utils/traductor"

const CmpFinal = () => {
  const { idioma } = useContext(IdiomaContext)
  console.log(idioma)

  return (
    <div>
      <h4>Cmp Final</h4>

      <p>{traducir('bienvenido', idioma)} Charly</p>
    </div>
  )
}

export default CmpFinal