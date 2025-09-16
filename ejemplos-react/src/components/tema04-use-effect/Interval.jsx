import { useState, useEffect } from "react"


const Interval = () => {
  const [num, setNum] = useState(0)

  useEffect(() => {

    // setInterval(() => {
    //   setNum(num + 1)
    // }, 1000)
    setTimeout(() => {
      setNum(num + 1)
    }, 1000)

  })

  return (
    <div>
      <p>{num}</p>
    </div>
  )
}

export default Interval