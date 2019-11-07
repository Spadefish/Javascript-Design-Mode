<template>
    <div>
        <h5>组件D</h5>
        <h5>{{message}}</h5>
        <h5>{{bMessage}}</h5>
        <label>请输入用户名： <input type="text" v-model="myD" @input="DInput"></label>
    </div>
</template>

<script>
    export default {
        name: 'test-d',
        props: {
            myData: String,
            message: String,
            bMessage: String
        },
        created() {
            this.myD = this.myData
        },
        data() {
            return {
                myD: '200',
            }
        },
        methods: {
            DInput() {
                this.$emit('changeMyData', this.myD)
            }
        }
    }
</script>

<style scoped>

</style>
