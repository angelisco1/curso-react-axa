import { useEffect, useRef, useState } from 'react'
import Video from '../../../public/video.mp4'

const Tema06UseRef = () => {
  const videoRef = useRef(null)
  const [volumen, setVolumen] = useState(0)

  useEffect(() => {
    setVolumen(videoRef.current.volume * 100)
  }, [videoRef])

  const play = () => {
    console.log(videoRef)
    videoRef.current.play()
  }

  const pause = () => {
    videoRef.current.pause()
  }

  const changeVolumen = (event) => {
    const volumen = Number(event.target.value)
    videoRef.current.volume = volumen / 100
    setVolumen(volumen)
  }

  return (
    <div>
      <h2>Tema 06: referencias y el hook useRef</h2>

      <video src={Video} width="200" ref={videoRef} />

      <button type="button" onClick={play}>Play</button>
      <button type="button" onClick={pause}>Pause</button>

      <input type="range" min="0" max="100" value={volumen} onInput={changeVolumen} />

    </div>
  )
}

export default Tema06UseRef