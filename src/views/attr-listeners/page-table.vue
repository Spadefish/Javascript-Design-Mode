<template>
    <div class="page-table">
        <div class="wrapper">
            <el-table
                    ref="elTable"
                    v-bind="$attrs"
                    v-on="$listeners"
            >
                <slot/>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'page-table'
    }
</script>

<style scoped>

</style>
