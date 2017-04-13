<template>
    <div>
        <a class="weui-cell weui-cell_access stuff-item" href="#" style="padding: 20px;margin-top: 10px">
            <div class="weui-cell__hd">
                <img src="http://localhost/avatar/jx3/f-2.png" width="64" height="64" alt="">            </div>
            <div class="weui-cell__bd weui-cell_primary">
                <p class="stuff-header__name" style="font-size: .34rem;font-weight: 600;color: #787878;">超级管理(花哥)</p>
                <p class="weui-cell_access stuff-header__small">
                    <small>
                        经验 25 &nbsp; <em class="level-1">Lv1.4</em><br>
                        已注册 142 天 &nbsp; 收获 2 并送出 0 赞
                    </small>
                </p>
            </div>
            <div class="weui-cell__ft"></div>
        </a>
        <div class="demo-menu-container" style="margin-top: 10px">
            <mu-paper class="demo-menu">
                <mu-menu style="width: 390px">
                    <mu-menu-item title="发布的秘密" leftIcon="remove_red_eye" afterText="5个 >"/>
                    <mu-menu-item title="发布的评论" leftIcon="person_add" afterText="5条 >"/>
                    <mu-menu-item title="相关的秘密" leftIcon="link" afterText="点赞/评论 >"/>
                    <mu-menu-item title="语音连麦区" leftIcon="content_copy" afterText="4积分 >"/>


                </mu-menu>
            </mu-paper>
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
    import '../../lib/weui.css'
    export default{

    }
</script>

<style>
    .weui-grid p{
        color: #a3a9ae;
    }
</style>