<template>
    <a-layout :style="{minHeight:'100vh'}">
        <a-layout-header class="header">
            <div class="logo"></div>
            <a-menu mode="horizontal"
                    v-model="current"
                    theme="dark" class="menu" @click="menuChange">
                <a-menu-item v-for="item in menuList" :key="item.path">
                    <router-link :to="item.path">
                        {{item.name}}
                    </router-link>
                </a-menu-item>
            </a-menu>
            <div class="top-right">
                <div class="item"><a-icon type="bell"/></div>
                    <a-dropdown>
                        <div class="item" >
                            <a-avatar icon="user" :size="26"/> 小姨日签 <a-icon type="down" /></div>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
        </a-layout-header>
        <a-layout-content>
            <div class="container">
                <router-view/>
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script>
    export default {
        name: "Layout",
        data(){
            return {
                current:['/'],
                menuList:[
                    {name:'工作台',path:'/'},
                    {name:'素材库',path:'/materials'},
                    {name:'品牌',path:'/brand'},
                    {name:'用户',path:'/member'},
                    {name:'设置',path:'/setting'}
                ]
            }
        },
        created(){
            let menu_current = localStorage.getItem('menu_current')
            if(menu_current){
                this.current = [menu_current]
            }
        },
        methods:{
            menuChange(e){
                this.current = [e.key]
                localStorage.setItem('menu_current',e.key)
            }
        }
    }
</script>

<style scoped>
    .header{
        height: 56px;
        line-height: 56px;
        display: flex;
    }
    .header .logo{
        flex: 0 0 160px;
        background-color: rgba(255,255,255,0.05);
        margin-right: 24px;
        height: 36px;
        border-radius: 2px;
        margin-top: 10px;
    }
    .menu{
        line-height: 56px;
        flex: 1;
    }
    .top-right{
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }
    .top-right>.item{
        display: inline-block;
        height: 56px;
        margin-left: 24px;
        color: rgba(255,255,255,.65);
    }
    .top-right>.item:hover{
        cursor: pointer;
        color: #fff;
        transition: all .4s;
    }
    .container {
        margin: 0 auto;
    }


    @media screen and ( max-width: 1920px ) {
        .container{
            width: 1440px;
        }
    }
    @media screen and (max-width: 1600px){
        .container{
            width: 1280px;
        }
    }
    @media screen and (max-width: 1366px) {
        .container{
            width: 1266px;
        }
    }
</style>