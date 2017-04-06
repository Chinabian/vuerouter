/**
 * Created by HL03 on 2017/4/6.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Vum from '../vum'
import config from './router'

Vue.use(Router)
Vue.use(Vum)

export default new Router({
    routes:config
})