<template>
    <div>
        <h3>这个test demo哈哈哈哈哈</h3>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'test-demo',
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {
            console.log(this)
            console.log(this.$slots)
            console.log(this.$parent.$refs)
            console.log(this.$parent.$options.name)
            document.body.appendChild(this.$parent.$el)
            console.log(this.$parent.$el)
        }
    }
</script>

<style scoped>

</style>
