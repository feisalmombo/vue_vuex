import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import store from './store'

Vue.use(VueResource);

Vue.http.options.root = "https://jsonplaceholder.typicode.com/";

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')