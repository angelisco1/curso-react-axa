import { jsx } from 'react/jsx-runtime'
import Sugus from './Sugus'

const Tema01ComponentesYPropiedades = () => {
  const nombre = "Charly"
  const color = 'negro'

  const getColor = () => {
    return color === 'azul' ? 'El texto es azul' : 'El texto no es azul'
  }

  return (
    // Un componente solo puede devolver un elemento
    <div>
      <h2>Tema 01: Componentes y Propiedades</h2>
      <h3>JSX</h3>
      {/* Todas las etiquetas se tienen que cerrar y si un atributo consta de más de 1 palabra entonces se usa camelcase (minLength) */}
      <input type="text" id="nombre" minLength={3} value={nombre} />

      {/* Los atributos class y for no podemos utilizarlos */}
      <label htmlFor="nombre">Nombre: </label>

      <p className="textoAzul">{color === 'azul' ? 'El texto es azul' : 'El texto no es azul'}</p>

      <p className="textoAzul">{getColor()}</p>

      <h3>Propiedades</h3>
      <Sugus color="red" sabor="fresa" />
      <Sugus color="blue" sabor="piña" />
      <Sugus color="orange" sabor="naranja" />
      <Sugus />

    </div>
  )
}

export default Tema01ComponentesYPropiedades


// jsx(
//   'div',
//   {
//     children: [
//       jsx('h2',
//         {
//           children: 'Tema 01: Componentes y Propiedades'
//         }
//       )
//     ]
//   },
// )
