import { useState } from "react"


const Contador = () => {

  // const estado = useState(0)
  // const cuenta = estado[0]
  // const setCuenta = estado[1]
  // console.log(estado)
  const [cuenta, setCuenta] = useState(0)
  // let cuenta = 1


  const incrementar = () => {
    console.log('Pasa por incrementar')
    // cuenta += 1
    setCuenta(cuenta + 1)
  }

  const decrementar = () => {
    setCuenta(cuenta - 1)
  }

  const setValorCuenta = (event) => {
    const nuevaCuenta = Number(event.target.value)
    setCuenta(nuevaCuenta)
  }

  return (
    <div>
      <button type="button" className="mx-1" onClick={decrementar}>-</button>
      <span className="mx-1">{cuenta}</span>

      {/* TODO: Ejercicio: cambiar la cuenta al valor escrito en este input */}
      <input type="number" onChange={setValorCuenta} />


      <button type="button" className="mx-1" onClick={incrementar}>+</button>
    </div>
  )
}

export default Contador