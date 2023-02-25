import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import Routes from './routes'

Vue.use(vueRouter)

const router = new vueRouter({
    routes: Routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})