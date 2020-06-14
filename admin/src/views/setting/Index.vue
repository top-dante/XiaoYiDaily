<template>
    <a-layout :style="{marginTop:'32px',background:'#fff',borderRadius:'4px',overflow:'hidden'}">
        <a-layout-sider theme="light">
            <a-menu mode="inline"
                    v-model="current"
                    :style="{minHeight:'400px',padding:'24px 0'}"
                    @click="menuClick">
                <a-menu-item-group title="全局设置"/>
                <a-menu-item key="index"><a-icon type="font-size" />标题设置</a-menu-item>
                <a-menu-item key="wechat"><a-icon type="wechat" />微信公众号</a-menu-item>
                <a-menu-item key="category"><a-icon type="appstore" />素材分类</a-menu-item>
                <a-menu-item key="storage"><a-icon type="cloud" />存储管理</a-menu-item>
                <a-menu-item key="manage"><a-icon type="team" />管理员</a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout-content>
            <template v-if="settingItem==='category'">
                <Category/>
            </template>
        </a-layout-content>
    </a-layout>
</template>

<script>
    import Category from "./Category";
    export default {
        name: "Index",
        components:{Category},
        data(){
            return {
                current:['index'],
                settingItem:'index'
            }
        },
        methods:{
            menuClick({key}){
                this.current = [key]
                this.settingItem = key
            }
        }
    }
</script>

<style scoped>

</style>