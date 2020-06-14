<template>
    <a-layout :style="{marginTop:'32px'}">
        <a-layout-sider :style="{background:'transparent'}">
            <a-menu mode="inline" :style="{background:'transparent'}">
                <a-menu-item-group>
                    <span slot="title"><a-icon type="appstore"/> 素材分类</span>
                    <a-menu-item>全部分类</a-menu-item>
                    <a-sub-menu><span slot="title">品牌</span></a-sub-menu>
                    <a-sub-menu><span slot="title">应用场景</span></a-sub-menu>
                    <a-sub-menu><span slot="title">节日</span></a-sub-menu>
                </a-menu-item-group>
            </a-menu>
            <a-menu mode="inline" :style="{background:'transparent'}">
                <a-menu-item-group>
                    <span slot="title"><a-icon type="filter" /> 排序方式</span>
                    <a-menu-item key="default">默认排序</a-menu-item>
                    <a-menu-item key="idAsc">最早发布</a-menu-item>
                    <a-menu-item key="idDesc">最新发布</a-menu-item>
                    <a-menu-item key="viewsDesc">使用最多</a-menu-item>
                    <a-menu-item key="viewAsc">使用最少</a-menu-item>
                </a-menu-item-group>
            </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{paddingLeft:'24px'}">
            <a-button type="primary" icon="plus">添加素材</a-button>
            <div :style="{float: 'right'}">
                <a-input-search placeholder="请输入素材关键搜索" />
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>