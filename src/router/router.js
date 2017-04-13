/**
 * Created by HL03 on 2017/4/6.
 */
const index = r => require.ensure([], () => r(require('../view/post/index.vue')), 'Index')
const post = r => require.ensure([], () => r(require('../view/post/post.vue')), 'post')
const defaul = r => require.ensure([], () => r(require('../view/defaul/defaul.vue')), 'defaul')
const comment = r => require.ensure([], () => r(require('../view/comment/_comments.vue')), 'comment')
const user = r => require.ensure([], () => r(require('../view/user/user.vue')), 'user')
const detail = r => require.ensure([], () => r(require('../view/detail/detail.vue')), 'detail')


export default [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/post',
        name: 'post',
        component: post
    },
    {
        path:'/detail',
        name:'detail',
        component:detail,

    },
    {
        path: '/defaul',
        name: 'defaul',
        component: defaul
    },
    {
        path: '/comment',
        name: 'comment',
        component: comment
    },
    {
        path: '/user',
        name: 'user',
        component: user
    }

]
