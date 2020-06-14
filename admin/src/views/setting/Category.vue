<template>
    <div>
        <a-page-header title="素材分类" :style="{borderBottom:'1px solid #e8e8e8'}">
            <template slot="extra">
                <AddCategory/>
            </template>
        </a-page-header>
    </div>
</template>

<script>
    import AddCategory from "./components/AddCategory";
    export default {
        name: "Category",
        components:{AddCategory}
    }
</script>

<style scoped>

</style>