import { useEffect, useState } from "react"
import Cocktail from "./Cocktail"


const BuscadorCocktails = () => {
  const [cocktails, setCocktails] = useState([]) // old: [], new: []
  const [filtro, setFiltro] = useState('') // old: '', new: 'm'
  const [cocktailSeleccionado, setCocktailSeleccionado] = useState(null) // old: null, new: null

  // useEffect(() => {
  //   fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + filtro)
  //     .then((resp) => {
  //       return resp.json()
  //     })
  //     .then((data) => {
  //       console.log(data)
  //       setCocktails(Array.isArray(data.drinks) ? data.drinks : [])
  //     })
  // }, [filtro])

  /*
    {
      deps: {
        filtro: old: '', new: 'm
      },
      return: () => {}
    }
  */


  useEffect(() => {
    console.log('1. Se renderiza con el filtro a ', filtro)

    const timeoutId = setTimeout(() => {

      fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + filtro)
        .then((resp) => {
          return resp.json()
        })
        .then((data) => {
          console.log(data)
          setCocktails(Array.isArray(data.drinks) ? data.drinks : [])
          // $('ul').innerHTML = '<li>...</li><li>...</li>'
        })

    }, 1000)

    return () => {
      console.log('2. Se destruye con el filtro a ', filtro)
      // $('ul').innerHTML = ''
      clearTimeout(timeoutId)
    }
  }, [filtro])

  const setCocktail = (id) => {
    console.log(id)
    const cocktailSeleccionado = cocktails.find(cocktail => cocktail.idDrink === id)
    console.log(cocktailSeleccionado)

    const ingredientes = []

    let i = 1
    while (cocktailSeleccionado['strIngredient' + i]) {
      ingredientes.push(cocktailSeleccionado['strIngredient' + i])
      i++
    }

    setCocktailSeleccionado({
      id: cocktailSeleccionado.idDrink,
      nombre: cocktailSeleccionado.strDrink,
      instrucciones: cocktailSeleccionado.strInstructionsES ? cocktailSeleccionado.strInstructionsES : cocktailSeleccionado.strInstructions,
      imagen: cocktailSeleccionado.strDrinkThumb,
      ingredientes: ingredientes
    })
  }

  const listaCocktails = cocktails.map(cocktail => <li key={cocktail.idDrink} onClick={(event) => setCocktail(cocktail.idDrink)}>{cocktail.strDrink}</li>)

  return (
    <div>
      <input type="text" onInput={(event) => setFiltro(event.target.value)} />

      {cocktails.length > 0 ? (<ul>{listaCocktails}</ul>) : (<p>No se han encontrado cocktails por el filtro {filtro}</p>)}

      <hr></hr>

      {/* {cocktailSeleccionado && <div>
          <h3>{cocktailSeleccionado.nombre}</h3>
          <img src={cocktailSeleccionado.imagen} width="150" />
          <p>{cocktailSeleccionado.instrucciones}</p>
          <ul>
            {cocktailSeleccionado.ingredientes.map((ing, i) => <li key={i}>{ing}</li>)}
          </ul>
        </div>
      } */}

      {cocktailSeleccionado && <Cocktail cocktail={cocktailSeleccionado} /> }

    </div>
  )
}

export default BuscadorCocktails