import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
//import axios from 'axios'
import router from './router'
import service from './service'
import echarts from 'echarts'


Vue.use(ElementUI)
    //Vue.prototype.axios = axios
Vue.prototype.service = service
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false


//路由导航守卫
router.beforeEach((to, next) => {
    if (!localStorage.getItem('username')) {
        if (to.path !== '/login') {
            next('/login')
        } else next()
    }
    next()
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')