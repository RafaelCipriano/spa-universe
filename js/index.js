import { Router } from "./router.js";

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universo', '/pages/universo.html')
router.add('/exploracao', '/pages/exploracao.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

function activeTargetLink() {
    if(window.location.pathname === '/') {
        document.querySelector('nav a:nth-child(2)')
        .classList.add('targetPage')
    } else {
        document.querySelector('nav a:nth-child(2)')
        .classList.remove('targetPage')
    }
    
    if(window.location.pathname === '/universo') {
        document.querySelector('nav a:nth-child(3)')
        .classList.add('targetPage')
    } else {
        document.querySelector('nav a:nth-child(3)')
        .classList.remove('targetPage')
    }
    
    if(window.location.pathname === '/exploracao') {
        document.querySelector('nav a:nth-child(3)')
        .classList.add('targetPage')
    } else {
        document.querySelector('nav a:nth-child(3)')
        .classList.remove('targetPage')
    }
}

// setInterval(activeTargetLink(), 1000)