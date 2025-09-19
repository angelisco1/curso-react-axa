import { useContext } from "react"
import { IdiomaContext } from "./contexts/IdiomaContext"
import { traducir } from "./utils/traductor"

const CmpFinal = () => {
  const { idioma } = useContext(IdiomaContext)
  console.log(idioma)

  return (
    // <React.Fragment>
    <>
      <h4>Cmp Final</h4>

      <p>{traducir('bienvenido', idioma)} Charly</p>
    </>
    // </React.Fragment>
  )
}

export default CmpFinal