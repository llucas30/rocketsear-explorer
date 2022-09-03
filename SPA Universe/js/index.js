import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


/*   COMANDOS NO TERMINAL:
  node -v 
    verifica versão do node.js
-----------------------------------------------------------------------------
  npm init -y
    cria package.json
-----------------------------------------------------------------------------
  npm install lite-server
    cria package-lock.json e node_modules (pacotes para criar um servidor) 
------------------------------------------------------------------------------
  npm start
    abre no navegador o projeto através de um servidor
------------------------------------------------------------------------------
*/
