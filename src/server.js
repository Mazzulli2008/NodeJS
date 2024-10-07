import http from 'node:http'

import { json } from './middlewares/json.js'
import { Database } from './database.js'
import { extractQueryParams } from './utils/extract-query-params.js'



const server = http.createServer(async(req, res) =>{
    const { method, url } = req

    await json(req, res)

   const route = routes.find(route=>{
        return route.method === method && route.path.test(url)
   })

   if (route) {
    const routeParams = req.url.match(route.path)

    console.log(extractQueryParams(routeParams.groups.query))

    const {query, ...params} = routeParams.groups

        req.params = {...routeParams.groups}
        req.query = query ? extractQueryParams (query) : {}

    return route.handler(req,res)
   }

    return res.writeHead(404).end()
    

})

server.listen(3333)
   



//Rotas
//-Criação de usuarios
//-listagem usuarios
// -Edição usuarios
 //-remoção de usuarios

//-HTTP 
//-metodo HTTP
//-URL

//Métodos
// get,post,put,patch, delete

//Get-> buscar um recurso no back-end

//post-> Criar um recurso no back-end

//put-> atualizar um recurso no back-end

//patch-> atualizar uma informação especifica de um recurso no back-end

//delete-> Dldetar um recurso back-end

//Método + recurso

//GET /users -> buscar um usuario 
// POST /users -> Criar Usuários


