
const mostrarEnlacePulsado = (event) => {
  event.preventDefault()
  console.log(event.target.textContent)
}

const cajaDentroPulsada = (event) => {
  console.log(event)
  event.stopPropagation()
  console.log('Dentro')
}

const cajaFueraPulsada = (event) => {
  console.log('Fuera')
}

const Tema02Eventos = () => {

  const mostrarAlert = (event) => {
    alert('Hola mundo 2!!!')
    console.log(event)
  }

  const validarEmail = (event) => {
    const email = event.target.value
    if (!email.includes('@')) {
      console.log('Te falta el @')
    }
    if (!email.endsWith('.es') && !email.endsWith('.com')) {
      console.log('Te falta la extensión: .es o .com')
    }
  }

  return (
    <div>
      <h2>Tema 02: Eventos</h2>

      <button type="button" onClick={() => alert('Hola mundo!!!')}>Mostrar alert</button>
      <button type="button" onClick={mostrarAlert}>Mostrar alert</button>

      <a href="https://google.es" onClick={mostrarEnlacePulsado}>Google</a>

      <input type="text" onInput={validarEmail} />

      <div style={{border: '1px solid black', width: '300px', height: '300px'}} onClick={cajaFueraPulsada}>
        Caja de fuera

        <div style={{border: '1px solid black', width: '150px', height: '150px'}} onClick={cajaDentroPulsada}>
          Caja de dentro
        </div>

      </div>

    </div>
  )
}

export default Tema02Eventos

// // Chrome, Firefox
// event.target
// // Internet Explorer
// event.source
// event.target