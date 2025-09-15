import './Sugus.css'


// Desestructuración
const Sugus = ({ color = 'yellow', sabor = 'limón' }) => {
  // console.log(props)

  // props.sabor = 'pera'

  // const color = props.color
  // const sabor = props.sabor

  // const { color, sabor } = props
  // const [n1, n2, n3] = [1, 2, 3]

  // const color = 'yellow'
  // const sabor = 'limón'

  const estilos = {
    backgroundColor: color,
    borderRadius: '5px',
  }

  return (
    <div className="sugus" style={ estilos }>
      <p>{sabor}</p>
    </div>
  )
}

// Antigua forma de dar valores por defecto a las props
// Sugus.defaultProps = {
//   color: 'yellow'
// }

export default Sugus