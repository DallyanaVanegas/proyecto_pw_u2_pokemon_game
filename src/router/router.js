import { createRouter, createWebHashHistory } from 'vue-router'

//import AboutPage from "@/modulos/pokemon/pages/AboutPage"
//import PokemonPage from "@/modulos/pokemon/pages/PokemonPage"
//import ListPages from "@/modulos/pokemon/pages/ListPages"
//import NoPageFound from "../modulos/pokemon/pages/NoPageFound"

/*
const routes = [
    { path: '/', component: AboutPage },
    { path: '/id', component: PokemonPage },
    { path: '/list', component: ListPages },
    { path: '/:pathMatch(.*)*', component: NoPageFound }

]*/

//lazy load
const routes = [
    { path: '/', component: () => import(/*webpackChunkName:"AboutPage" */ '@/modulos/pokemon/pages/AboutPage') },
    { path: '/id', component: () => import(/*webpackChunkName:"PokemonPage" */ '@/modulos/pokemon/pages/PokemonPage') },
    { path: '/list', component: () => import(/*webpackChunkName:"ListPages" */ '@/modulos/pokemon/pages/ListPages') },
    { path: '/:pathMatch(.*)*', component: () => import(/*webpackChunkName:"NoPageFound" */ '@/modulos/pokemon/pages/NoPageFound') }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router