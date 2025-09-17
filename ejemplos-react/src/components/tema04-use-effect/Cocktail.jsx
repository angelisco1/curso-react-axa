const Cocktail = ({cocktail}) => {

  return (
    <div>
      <h3>{cocktail.nombre}</h3>
      <img src={cocktail.imagen} width="150" />
      <p>{cocktail.instrucciones}</p>
      <ul>
        {cocktail.ingredientes.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>
    </div>
  )
}

export default Cocktail