<template>
   <div>
       <mu-appbar style="background-color: #397aff">
           <mu-text-field icon="search" class="appbar-search-field"   hintText="请输入搜索内容"/>
           <mu-flat-button color="white" label="搜索" slot="right"/>
       </mu-appbar>
       <mu-card>
           <mu-card-header title="某某花哥 Lv3" subTitle="2017.01.04 来自一苇渡江" style="float: left">
               <mu-avatar src="" slot="avatar"/>
               <div style="float: right;width: 50px">
                   <mu-raised-button @click="openBottomSheet" label="代替" />
                   <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
                       <mu-list @itemClick="closeBottomSheet">
                           <mu-sub-header>
                               请选择一个
                           </mu-sub-header>
                           <mu-list-item title="删除"/>
                           <mu-list-item title="举报"/>
                       </mu-list>
                   </mu-bottom-sheet>
               </div>
           </mu-card-header>
           <mu-card-text>
               散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
           </mu-card-text>
           <mu-divider/>
           <mu-card-text style="font-weight: bold">
               <span style="font-weight: bold"> 我：</span><span style="font-weight: 400">我红红火火 测试录音</span>
           </mu-card-text>



       </mu-card>
   </div>
</template>

<script>
    export default {
        data () {
            return {
                bottomSheet: false
            }
        },
        methods: {
            closeBottomSheet () {
                this.bottomSheet = false
            },
            openBottomSheet () {
                this.bottomSheet = true
            }
        }
    }
</script>

<style lang="less">
    .appbar-search-field{
        color: #FFF;
        margin-bottom: 0;
    &.focus-state {
         color: #FFF;
     }
    .mu-text-field-hint {
        color: fade(#FFF, 54%);
    }
    .mu-text-field-input {
        color: #FFF;
    }
    .mu-text-field-focus-line {
        background-color: #FFF;
    }
    }
</style>