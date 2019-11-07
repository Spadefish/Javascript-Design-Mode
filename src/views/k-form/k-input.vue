<template>
    <div>
        <input :type="type" :value="value" @input="onInput">
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
        },
        methods: {
            onInput(e) {
                let value = e.target.value
                this.$emit('input', value)
                //  在父组件里面进行监听和处理事件
                this.$parent.$emit('validate')
            }
        }
    }
</script>

<style scoped>

</style>
