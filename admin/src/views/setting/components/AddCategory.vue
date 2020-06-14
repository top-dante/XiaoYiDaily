<template>
    <span>
        <a-button icon="plus" @click="visible = true" type="primary">添加分类</a-button>
        <a-modal v-model="visible" title="添加分类">
            <a-form :label-col="{span:4}" :wrapper-col="{span:16}">
                <a-form-item label="分类名称" help="请输入分类名称，请保持在6个字以内"><a-input/></a-form-item>
                <a-form-item label="上级分类" help="请选择上级分类">
                     <a-select show-search placeholder="请选择上级分类">

                     </a-select>
                </a-form-item>
                <a-form-item :wrapper-col="{span:10}" label="分类排序" help="输入排序，数字越大越靠前">
                    <a-input type="number"/>
                </a-form-item>
            </a-form>
        </a-modal>
    </span>
</template>

<script>
    export default {
        name: "AddCategory",
        data(){
            return {
                visible:false
            }
        }
    }
</script>

<style scoped>

</style>