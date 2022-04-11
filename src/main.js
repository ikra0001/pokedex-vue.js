import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import vue componets
import Pokedex from './views/Pokedex.vue'
import Pokemon from './views/Pokemon.vue'

const routes = [
    {
        path: '/',
        component: Pokedex
    },
    {
        path: '/pokemon/:name',
        component: Pokemon,
        props: true
    }
]

// ROUTER
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

createApp(App).use(router).mount('#app')
