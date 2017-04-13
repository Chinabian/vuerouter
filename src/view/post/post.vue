<template>
    <mu-row gutter   style="background-color: #397aff" >

        <mu-col width="10" tablet="30" desktop="25">
            <img src="../../assets/1490336721.png" alt="" @click="toggle(true)" style="width: 17px;height: 15px;margin-left: 10px;margin-top: 17px">
            <mu-drawer :open="open" :docked="docked" @close="toggle()">
                <mu-list @itemClick="docked ? '' : toggle()">
                    <mu-list-item title="兑激活码"/>
                    <mu-list-item title="相关秘密"/>
                    <mu-list-item title="沧海拾遗"/>
                    <mu-list-item title="树洞心事"/>
                    <mu-list-item title="自拍自嗨"/>
                    <mu-list-item title="情缘故事"/>
                    <mu-list-item title="更多精华标签"/>
                    <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
                </mu-list>
            </mu-drawer>
        </mu-col>
        <mu-col width="70" tablet="30" desktop="25">
            <mu-tabs :value="activeTab" @change="handleTabChange" style="background-color: #397aff">
                <mu-tab  value="tab1" title="一苇渡江"/>
                <mu-tab  value="tab2" title="全服"/>
                <mu-tab  value="tab3" title="相关"/>
                <mu-tab  value="tab4" title="热"/>
                <mu-tab  value="tab5"  title="赏"/>
            </mu-tabs>

        </mu-col>
        <mu-col width="10" tablet="20" desktop="25">
            <img src="../../assets/1490336707.png" alt="" style="width: 15px;height: 17px;margin-top: 17px">
        </mu-col>

        <div v-if="activeTab === 'tab1'" style="background-color: #ffffff;width: 100%">
            <mu-card >
                <mu-card-header title="某某花哥 Lv3" subTitle="2017.01.04 来自一苇渡江" style="float: left">
                    <mu-avatar src="" slot="avatar"/>
                    <div style="float: right;width: 50px">
                        <mu-raised-button @click="openBottomSheet" label="∨" style="height: 17px;min-width:15px;width: 15px;border-radius: 50%;color: #CCCCCC;margin-left: 35px"/>
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
                <router-link to="/detail">
                <mu-card-text>
                    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
                    调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
                    似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
                    找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
                    <img src="../../assets/an.jpg" alt="">
                    <img src="../../assets/an.jpg" alt="">
                    <img src="../../assets/an.jpg" alt="">
                </mu-card-text>
                </router-link>
                <mu-divider/>
                <mu-card-actions>
                    <mu-flat-button label="阅读4"/>
                    <div style="float: right;margin-top: 5px">
                        <a href=""><img src="" alt=""><span>1</span></a>
                        <a href=""><img src="" alt=""><span>评</span></a>
                        <a href=""><img src="" alt=""><span>报</span></a>
                    </div>
                </mu-card-actions>
            </mu-card>


        </div>
        <div v-if="activeTab === 'tab2'" style="background-color: #ffffff;width: 100%" >
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
                    调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
                    似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
                    找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
                    <img src="../../assets/an.jpg" alt="">
                    <img src="../../assets/an.jpg" alt="">
                    <img src="../../assets/an.jpg" alt="">
                </mu-card-text>
                <mu-divider/>
                <mu-card-actions>
                    <mu-flat-button label="阅读4"/>
                    <div style="float: right;margin-top: 5px">
                        <a href=""><img src="" alt=""><span>1</span></a>
                        <a href=""><img src="" alt=""><span>评</span></a>
                        <a href=""><img src="" alt=""><span>报</span></a>
                    </div>
                </mu-card-actions>
            </mu-card>
        </div>
        <div v-if="activeTab === 'tab3'" style="background-color: #ffffff;width: 100%">
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
                    调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
                    似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
                    找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
                    <img src="../../assets/an.jpg" alt="">
                    <img src="../../assets/an.jpg" alt="">
                    <img src="../../assets/an.jpg" alt="">
                </mu-card-text>
                <mu-divider/>
                <mu-card-actions>
                    <mu-flat-button label="阅读4"/>
                    <div style="float: right;margin-top: 5px">
                        <a href=""><img src="" alt=""><span>1</span></a>
                        <a href=""><img src="" alt=""><span>评</span></a>
                        <a href=""><img src="" alt=""><span>报</span></a>
                    </div>
                </mu-card-actions>
            </mu-card>
        </div>
        <div v-if="activeTab === 'tab4'" style="background-color: #ffffff;width: 100%">
            <div class="weui-loadmore weui-loadmore_line">
                <span class="weui-loadmore__tips">暂无数据</span>
            </div>
        </div>
        <div v-if="activeTab === 'tab5'" style="background-color: #ffffff;width: 100%">
            <div class="weui-loadmore weui-loadmore_line">
                <span class="weui-loadmore__tips">暂无数据</span>
            </div>
        </div>
    </mu-row>




</template>

<script>
    import '../../lib/weui.rem.css'

    export default {
        data () {
            return {
                open: false,
                docked: true,
                activeTab: 'tab1',
                bottomSheet: false,

            }
        },
        methods: {
            toggle (flag) {
                this.open = !this.open;
                this.docked = !flag
            },
            handleTabChange (val) {
                this.activeTab = val
            },
            handleActive () {
                window.alert('tab active')
            },
            closeBottomSheet () {
                this.bottomSheet = false;
            },
            openBottomSheet () {
                this.bottomSheet = true;
            }

        },

    }


</script>

<style lang="css">
    .demo-grid div[class*="col-"] {
        background: #fff;
        text-align: center;
        color: #000;
        border: 1px solid #ddd;
        padding: 8px;
        margin-bottom: 8px;
    }
</style>