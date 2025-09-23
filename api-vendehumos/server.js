const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const SECRET = 'shhhh no se lo digas a nadie'

const usuarioValido = {
  email: "cfalco@gmail.com",
  password: "1234",
  nombre: "Charly",
}

server.use(jsonServer.bodyParser)
server.use(middlewares)


server.post('/login', async (req, res, next) => {
  const { email, password } = req.body

  const resp = await fetch('http://localhost:3000/usuarios')
  const usuarios = await resp.json()

  const usuarioEncontrado = usuarios.find(u => u.email === email && u.password === password )

  if (!usuarioEncontrado) {
    return res.status(401).json({msg: "Las credenciales no son validas"})
  }

  // generar un JWT
  const { nombre, id } = usuarioEncontrado
  const token = jwt.sign({email, nombre, id}, SECRET)
  console.log({token})

  return res.json({token})
})

server.post('/vendehumos', (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json({msg: 'Necesitas enviar un token'})
  }

  const [bearer, token] = authorization.split(" ")

  try {
    const payload = jwt.verify(token, SECRET)
    return next()
  } catch (err) {
    return res.status(401).json({msg: 'Tu token no es valido'})
  }
})


server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})