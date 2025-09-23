const url = "http://localhost:3000"

// findAll
const findAll = async () => {
  const resp = await fetch(url + '/vendehumos')
  return await resp.json()
}
// findById

// create
// export const create = (vendehumo) => {
//   return fetch(url + '/vendehumos', {
//     method: 'POST',
//     body: vendehumo
//   })
//     .then(resp => resp.json())
// }

const create = async (vendehumo) => {
  console.log({vendehumo})
  const tokenUsuario = localStorage.getItem('token') || ''

  const resp = await fetch(url + '/vendehumos', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tokenUsuario
    },
    body: JSON.stringify(vendehumo)
  })
  const vendehumoCreado = await resp.json()
  return vendehumoCreado
}

// update

export default {
  findAll,
  create,
}