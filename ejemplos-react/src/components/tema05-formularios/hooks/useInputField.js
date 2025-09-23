import { useEffect, useState } from "react"


const useInputField = (initialValue, validations = {}) => {
  const [value, setValue] = useState(initialValue)
  const [errors, setErrors] = useState([])
  const [modified, setModified] = useState(0)

  useEffect(() => {
    setModified(modified + 1)
  }, [value])

  useEffect(() => {
    const mensajesError = []

    Object.entries(validations).forEach((entry) => {
      // {nombre: 'Charly', edad: 49}
      // const {nombre, edad} = persona

      // ['minlength', 3]
      const [validationName, validationData] = entry

      if (validationName === 'minLength' && value.length < validationData) {
        mensajesError.push(`Tiene que tener una longitud mínima de ${validationData}`)
      }

      if (validationName === 'email' && !new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(value)) {
        mensajesError.push(`Tiene que tener un formato de email`)
      }

      if (validationName === 'needSymbols' && (!value.includes('.') && !value.includes(','))) {
        mensajesError.push('Tiene que tener al menos un símbolo: . o ,')
      }

      if (validationName === 'needMayus' && value.toLowerCase() === value) {
        mensajesError.push('Tiene que tener al menos una mayúscula')
      }

    })

    // if (value.length < 3) {
    //   mensajesError.push('Tiene que tener una longitud mínima de 3')
    // }

    // console.log(mensajesError)

    setErrors(mensajesError)

  }, [value])


  return [value, setValue, errors, modified > 1]
}

export default useInputField