<template>
    <div>
        <div class="page-header">
            <div class="container">
                <div class="page-heading">
                    <span class="page-header-title">品牌库</span>
                    <span class="page-header-title-description">常见市面上汽车品牌</span>
                </div>
                <div class="page-header-extra">
                    <a-button type="primary" icon="plus" >添加品牌</a-button>
                    <a-input-search placeholder="输入品牌关键字" :style="{width:'280px',marginLeft:'12px'}"/>
                </div>
            </div>
        </div>
        <div class="container">
            <a-row :gutter="24">
                <a-col :span="4" v-for="item in brandList" :key="item.brand_id" class="mb">
                    <a-card :bordered="false" hoverable :style="{borderRadius:'7px',overflow:'hidden'}">
                            <span slot="cover">
                                <img width="100%"
                                     src="https://daily-design.oss-cn-chengdu.aliyuncs.com/cover/benz.png?x-oss-process=style/sore">
                            </span>
                        <a-card-meta :title="item.brand_name">
                            <a-tag slot="description"
                                   class="border-circle border-none">
                                物料总数：{{item.brand_id}}</a-tag>
                        </a-card-meta>
                    </a-card>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data(){
            return {
                brandIndex:[],
                brandList:[],
                brandData:[]
            }
        },
        created(){
            this.getBrand();
        },
        methods:{
            getBrand(){
                let data = [];
                this.axios.get('brand/index')
                    .then((res)=>{
                        if(res.code === 200){
                            this.brandIndex = res.data.index
                            this.brandList = res.data.brand.slice(0,24)
                            this.brandData = res.data.brand
                        }
                    })
                console.log(data)
            }
        }
    }
</script>

<style>
    .ant-card-cover {
        height: 120px;
        overflow: hidden;
    }
</style>