import ReactDOM from 'react-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import VendehumosService from '../services/vendehumos.service'
import './Modal.scss'

const Modal = ({children, title, handleCancel = () => {}, handleAccept = () => {}}) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-header">
        <h3>{title}</h3>
      </div>
      <div className="modal-body">
        {children}
      </div>
      {/* <div className="modal-footer">
        <button type="button" onClick={handleCancel}>Cancelar</button>
        <button type="button" onClick={handleAccept}>Aceptar</button>
      </div> */}
    </div>,
    document.getElementById('modal')
  )
}

export default Modal