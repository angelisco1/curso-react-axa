// Action Creators

import vendehumosService from "../../services/vendehumos.service"
import { FILTRAR_VENDEHUMOS, INICIALIZAR_VENDEHUMOS } from "./actions.types"

export const crearAccionInicializarVendehumos = (vendehumos) => {
  return {
    type: INICIALIZAR_VENDEHUMOS,
    payload: vendehumos
  }
}

export const inicializarVendehumos = () => (dispatch) => {
  return vendehumosService.findAll()
    .then(vendehumos => {
      const accion = crearAccionInicializarVendehumos(vendehumos)
      dispatch(accion)
    })
}

export const filtrarVendehumos = (categoria) => {
  return {
    type: FILTRAR_VENDEHUMOS,
    payload: categoria
  }
}