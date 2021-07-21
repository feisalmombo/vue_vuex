import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import About from './components/About'
import Details from './views/Details.vue'
import Cats from './views/Cats.vue'
import Dogs from './views/Dogs.vue'
import Pet from './views/Pet.vue'
import Driver from './views/Driver.vue'
import store from './store/index'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/details', component: Details },
        { path: '/cats', component: Cats },
        { path: '/dogs', component: Dogs },
        { path: '/drivers', component: Driver },
        {
            path: '/pet/:species/:id',
            name: 'Pet',
            component: Pet
        },
        { path: '/about', component: About },
    ]
})

Vue.http.options.root = "https://jsonplaceholder.typicode.com/";

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')