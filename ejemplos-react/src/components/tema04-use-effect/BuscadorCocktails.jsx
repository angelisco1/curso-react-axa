import { useEffect, useState } from "react"


const BuscadorCocktails = () => {
  const [cocktails, setCocktails] = useState([])
  const [filtro, setFiltro] = useState('')

  useEffect(() => {

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + filtro)
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        console.log(data)
        setCocktails(Array.isArray(data.drinks) ? data.drinks : [])
      })

  }, [filtro])

  return (
    <div>
      <input type="text" onInput={(event) => setFiltro(event.target.value)} />

      {cocktails.length > 0 ? (
        <ul>
          {cocktails.map(cocktail => <li key={cocktail.idDrink}>{cocktail.strDrink}</li>)}
        </ul>
      ) : (<p>No se han encontrado cocktails por el filtro {filtro}</p>)}

      <hr></hr>

      <p>TODO: Aquí hay que mostrar los datos del cocktail seleccionado</p>

    </div>
  )
}

export default BuscadorCocktails