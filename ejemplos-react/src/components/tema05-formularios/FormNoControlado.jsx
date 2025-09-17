


const FormularioNoControlado = () => {

  return (
    <div>
      <h3>Formulario no controlado</h3>

      <form>
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" />
        </div>

        <div>
          <label for="email">Email:</label>
          <input type="text" id="email" />
        </div>

        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" />
        </div>

        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default FormularioNoControlado