<template>
    <div>
        <h2>组件A 数据项: {{myData}}</h2>
        <test-b
                @changeMyData="changeMyData"
                :myData="myData"
                :message="message"
                v-bind="$attrs"
                v-on="$listeners"
        ></test-b>
    </div>
</template>

<script>
    import TestB from '@/views/attr-listeners/test-b'
    export default {
        name: 'test-a',
        components: {TestB},
        props: {
            message: String
        },
        data()  {
            return {
                myData: '100',
            }
        },
        methods: {
            changeMyData(val) {
                this.myData = val
            }
        }
    }
</script>

<style scoped>

</style>
