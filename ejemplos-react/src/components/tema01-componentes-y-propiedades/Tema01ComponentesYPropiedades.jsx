import { jsx } from 'react/jsx-runtime'
import Sugus from './Sugus'

const Tema01ComponentesYPropiedades = () => {
  const nombre = "Charly"
  const color = 'naranja'

  const listaSugus = [
    { id: 1, color: 'blue', sabor: 'piña' },
    { id: 2, color: 'yellow', sabor: 'limón' },
    { id: 3, color: 'red', sabor: 'fresa' },
  ]

  const getColor = () => {
    return color === 'azul' ? 'El texto es azul' : 'El texto no es azul'
  }

  let componenteQueHayQuePintar = <p>Hay que pintar algo</p>
  if (color === 'naranja') {
    componenteQueHayQuePintar = <Sugus color="orange" sabor="naranja" />
  }

  const listaComponentesSugus = listaSugus.map((sugus) => <Sugus key={sugus.id} color={sugus.color} sabor={sugus.sabor} />)

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

      <div className="d-flex justify-content-space-center">
        <Sugus color="red" sabor="fresa" />
        <Sugus color="blue" sabor="piña" />
        <Sugus color="orange" sabor="naranja" />
        <Sugus />
      </div>

      <h3>Condicionales</h3>

      <div className="d-flex justify-content-space-center">
        {color === 'rojo' ? <Sugus color="red" sabor="fresa" /> : <p>No es rojo</p>}
        {color === 'azul' ? <Sugus color="blue" sabor="piña" /> : null}
        {color === 'naranja' && <Sugus color="orange" sabor="naranja" />}
        {componenteQueHayQuePintar}
      </div>

      <h3>Listas</h3>

      <div className="d-flex justify-content-space-center">
        {/*

        // 1.
        (sugus) => {
          // Aquí iría más código
          return <Sugus color={sugus.color} sabor={sugus.sabor} />
        }

        // 2.
        sugus => <Sugus color={sugus.color} sabor={sugus.sabor} />

        // 3.
        (sugus, i) => <Sugus color={sugus.color} sabor={sugus.sabor} />

        // 4.
        () => <p>Lo que sea</p>

         */}


        {/* { listaSugus.map((sugus) => <Sugus key={sugus.id} color={sugus.color} sabor={sugus.sabor} />) } */}
        {listaComponentesSugus}
      </div>

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
