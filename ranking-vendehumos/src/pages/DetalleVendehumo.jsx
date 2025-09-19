import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const DetalleVendehumo = () => {
  const [vendehumo, setVendehumo] = useState(null)
  const params = useParams()
  console.log(params)

  useEffect(() => {
    fetch(`http://localhost:3000/vendehumos/${params.id}`)
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        setVendehumo(data)
      })
  }, [params.id])

  return (
    <div>
      <h3>{vendehumo ? vendehumo.nombre : '...'}</h3>
      <pre>{JSON.stringify(vendehumo, null, 2)}</pre>
    </div>
  )
}

export default DetalleVendehumo