<template>

    <div class="page" style="height: 100px">
        <page-footer>
            <footer-item :class="{ 'active' : currentView === 'post' }" @click.native="changeView('post')">
                <span class="icon demo-icon-home"></span>
                <label>秘密</label>
            </footer-item>
            <footer-item :class="{ 'active' : currentView === 'comment' }" @click.native="changeView('comment')">
                <span class="icon demo-icon-noti"></span>
                <label>信息</label>
            </footer-item>
            <footer-item :class="{ 'active' : currentView === 'defaul' }" @click.native="changeView('defaul')">
                <span class="icon demo-icon-search"></span>
                <label>发现</label>
            </footer-item>
            <footer-item :class="{ 'active' : currentView === 'user' }" @click.native="changeView('user')">
                <span class="icon demo-icon-me"></span>
                <label>我</label>
            </footer-item>
        </page-footer>
        <component :is="currentView" keep-alive></component>
    </div>
</template>

<script>
    import Footer from '../../components/footer/footer.vue'
    import Item from '../../components/footer/item.vue'
    import post from './post.vue'
    import comment from '../comment/_comments.vue'
    import defaul from '../defaul/defaul.vue'
    import user from '../user/user.vue'

    export default{
        components: {
            'page-footer': Footer,
            'footer-item': Item,
            'post': post,
            'comment': comment,
            'defaul': defaul,
            'user': user
        },
        data () {
            return {
                currentView: 'post'
            }
        },
        methods: {
            changeView (view) {
                console.log(view)
                this.currentView = view
            }
        }
    }
</script>

<style lang="less">
    .demo-icon-home {
        background-image: url("../../assets/images/home/home.png");
        background-size: 100%;
    }

    .demo-icon-search {
        background-image: url("../../assets/images/home/search.png");
        background-size: 100%;
    }

    .demo-icon-noti {
        background-image: url("../../assets/images/home/button.png");
        background-size: 100%;
    }

    .demo-icon-me {
        background-image: url("../../assets/images/home/person.png");
        background-size: 100%;
    }
</style>