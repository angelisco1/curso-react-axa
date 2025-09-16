

const ContadorSinEstado = ({cuenta, changeCuenta, onIncrementar}) => {


  const incrementar = () => {
    onIncrementar(cuenta + 1)
  }

  const decrementar = () => {
    changeCuenta(cuenta - 1)
  }

  const setValorCuenta = (event) => {
    const nuevaCuenta = Number(event.target.value)
    changeCuenta(nuevaCuenta)
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

export default ContadorSinEstado