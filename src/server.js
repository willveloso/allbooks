const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./src/data/database.json')
const publicRoutes = require('./routes/publicRoutes')
const authenticationMiddleware = require('./middleware/authenticationMiddleware')


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

server.use('/public', publicRoutes) //rotas na porta 8000


server.use(/^(?!\/(public|livros|autores|categorias)).*$/, authenticationMiddleware);

server.use(router) //rotas na prota 3000

server.listen(8000, () => {
<<<<<<< HEAD
<<<<<<< HEAD
  console.log("Boas-vindas a API do All Books")
  console.log("API disponível através da url http://localhost:8000")
=======
  console.log("Acesse essa APIem http://localhost:8000")
>>>>>>> 9115c1db9204494fbbec840fe017ffea09ce9891
=======
  console.log("Acesse essa API em http://localhost:8000")
>>>>>>> b1484477d4d3e9a6ca9bbfbc32efc254bd87d39a
})
