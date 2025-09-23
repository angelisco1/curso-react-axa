// Reducer

import { FILTRAR_VENDEHUMOS, INICIALIZAR_VENDEHUMOS } from "./actions.types"


const initialState = {
  vendehumos: [],
  vendehumosFiltrados: [],
}


const vendehumosReducer = (state = initialState, action) => {
  console.log('ACABA DE LLEGAR LA ACCIÓN', action)
  switch(action.type) {
    case INICIALIZAR_VENDEHUMOS:
      return {
        ...state,
        vendehumos: action.payload,
        vendehumosFiltrados: action.payload,
      }
    case FILTRAR_VENDEHUMOS:
      console.log(state, action)
      return {
        ...state,
        vendehumosFiltrados: action.payload ? state.vendehumos.filter(vh => vh.categoria === action.payload) : state.vendehumos
      }
    default:
      return state
  }
}

export default vendehumosReducer