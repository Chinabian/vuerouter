/**
 * Created by HL03 on 2017/4/6.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Vum from '../vum'
import config from './router'
// import isscroll from '../iscroll'

Vue.use(Router);
Vue.use(Vum);
// Vue.use(isscroll);

export default new Router({
    routes: config
})