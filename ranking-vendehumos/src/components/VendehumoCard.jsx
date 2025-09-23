import { useEffect, useState } from "react"
import { Link, Outlet, useSearchParams } from "react-router"

const VendehumoCard = ({ vh }) => {

  return (
    <div className="mx-1 border br-10">
      <h3>
        <Link to={"/vendehumos/" + vh.id}>{vh.nombre}</Link>
      </h3>
      <img src={vh.imagen} style={{width: '100%'}} />
      <p>{vh.numVotos}</p>
    </div>
  )
}

export default VendehumoCard