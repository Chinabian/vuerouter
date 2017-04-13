<template>
    <div>
        <div class="demo-menu-container">
            <mu-paper class="demo-menu">
                <mu-menu style="width: 390px">
                    <mu-menu-item title="热门秘密" leftIcon="remove_red_eye" afterText="评/赞较多 >"/>
                    <mu-menu-item title="各区服秘密" leftIcon="person_add" afterText="按服务器 >"/>
                    <mu-menu-item title="精华推荐区" leftIcon="link" afterText="≈14 >"/>
                    <mu-menu-item title="语音连麦区" leftIcon="content_copy" afterText="pvbb >"/>
                    <mu-menu-item title="超级秘密" leftIcon="file_download" afterText="不分区服 >"/>

                </mu-menu>
            </mu-paper>
            <mu-paper class="demo-menu" >
                <mu-menu style="width: 390px">
                    <mu-menu-item title="沧海拾遗" leftIcon="remove_red_eye" afterText="幸运捡帖 >"/>
                    <mu-menu-item title="数据排行榜" leftIcon="remove_red_eye" afterText="围观大佬 >"/>
                    <mu-menu-item title="我的积分（换激活码）" leftIcon="remove_red_eye"  afterText="4积分 >"/>
                    <mu-menu-item title="海鳗茶馆"  rightIconColor="#559" leftIcon="remove_red_eye" afterText="故事/攻略 >"/>
                </mu-menu>
            </mu-paper>
        </div>

        <div class="control">
            <span>管理区</span>
        </div>
        <div class="weui-grids">
            <a href="#" class="weui-grid">
                <div class="weui-grid__icon">
                    <i class="fa fa-sign"></i>
                </div>
                <p class="weui-grid__label">
                    权限与限制
                </p>
            </a>
            <a href="#" class="weui-grid">
                <div class="weui-grid__icon"><i class="fa fa-ban"></i></div>
                <p class="weui-grid__label">黑名单</p>
            </a>
            <a href="#" class="weui-grid">
                <div class="weui-grid__icon"><i class="fa fa-search"></i></div>
                <p class="weui-grid__label">
                    关键词过滤
                </p>
            </a>
            <a href="#" class="weui-grid">
                <div class="weui-grid__icon"><i class="fa fa-key"></i></div>
                <p class="weui-grid__label">使用激活码</p>
            </a>
            <a href="#" class="weui-grid">
                <div class="weui-grid__icon"><i class="fa fa-gear"></i></div>
                <p class="weui-grid__label">修改资料</p>
            </a>
            <!--a href="/debug.php/secret/user/games" class="weui-grid">
                <div class="weui-grid__icon"><i class="fa fa-game-jx3"></i></div>
                <p class="weui-grid__label">
                    切换游戏
                </p>
            </a-->
            <a href="#" class="weui-grid">
                <div class="weui-grid__icon"><i class="fa fa-credit-card"></i></div>
                <p class="weui-grid__label">游戏认证</p>
            </a>
        </div>
    </div>

</template>

<script>
   export default{
        data(){
            return {

            }
        }
   }
</script>

<style lang="css">
    .gridlist-demo-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .gridlist-demo{
        width: 500px;
        height: 450px;
        overflow-y: auto;
    }
    .demo-menu {
        display: inline-block;
        margin-top: 18px;
        margin-bottom: 18px;
        width: 800px;
    }
    .demo-menu-container{
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
    }
    .control{
        margin-top: .77em;
        margin-bottom: .3em;
        padding-left: .27rem;
        padding-right: .27rem;
        color: #999999;
        font-size: .252rem;
    }

</style>