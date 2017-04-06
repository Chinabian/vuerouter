/**
 * Created by HL03 on 2017/4/6.
 */

const post = r =>require([],() => r(require('../view/post/index.vue')),'post')
const defaul = r =>require([],() => r(require('../view/defaul/defaul.vue')),'defaul')
const comment = r =>require([],() => r(require('../view/comment/_comments.vue')),'comment')
const user = r =>require([],() => r(require('../view/user/user.vue')),'user')

export default [
    {
        path:'/',
        name:'Index',
        component:Index
    },
    {
        path:'/post',
        name:'post',
        component:post
    },
    {
        path:'/defaul',
        name:'defaul',
        component:defaul
    },
    {
        path:'/comment',
        name:'comment',
        component:comment
    },
    {
        path:'/user',
        name:'user',
        component:user
    }

]
