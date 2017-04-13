// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iscroll from './iscroll'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import MuseUI from '../node_modules/muse-ui'
import '../node_modules/muse-ui/dist/muse-ui.css'

import adaptive from './adaptive'
// console.log(adaptive)

// Vue.use(adaptive);
Vue.use(ElementUI)
Vue.use(MuseUI)

adaptive.desinWidth = 750;
adaptive.baseFont = 28;
adaptive.maxWidth = 480;
//window['adaptive'].scaleType = 1;
adaptive.init();



Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});






