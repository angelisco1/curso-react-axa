import { useCallback, useEffect, useId, useReducer } from "react"

const styles = {
  width: '50px',
  height: '50px',
  border: '1px solid black',
  backgroundColor: 'yellowgreen',
  position: 'relative',
}

const cajaReducer = (state, action) => {
  // console.log(state, action)

  switch (action.key) {
    case 'ArrowDown':
      return { ...state, top: state.top + 3 }
    case 'ArrowUp':
      return { ...state, top: state.top - 3 }
    case 'ArrowRight':
      return { ...state, left: state.left + 3 }
    case 'ArrowLeft':
      return { ...state, left: state.left - 3 }
    default:
      return state
  }
}


const Tema08UseReducer = () => {
  const [posicionCaja, dispatch] = useReducer(cajaReducer, {top: 0, left: 0})

  const stylesConPosicion = {
    ...styles,
    top: posicionCaja.top + 'px',
    left: posicionCaja.left + 'px',
  }

  // useCallback
  const keydownHandler = useCallback((event) => {
    // console.log(event)
    // El parámetro del dispatch es el "action" del reducer
    dispatch({key: event.code})
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler)

    return () => {
      window.removeEventListener('keydown', keydownHandler)
    }
  }, [])

  return (
    <div>
      <h2>Tema 08: useReducer</h2>

      <div className="caja" style={stylesConPosicion}></div>

    </div>
  )
}

export default Tema08UseReducer