<template>
    <div>
        <h1>这是index组件</h1>
        <test-a
                @changeMyData="changeMyData"
                :message="message"
        ></test-a>
        <pre></pre>
        <pre></pre>
        <!--pageTable是对第三方组件el-table的二次封装-->
        <!--pageTable拥有了el-table组件的所有属性和方法-->
        <div>
            <page-table
                    :data="tableData"
                    :stripe="true"
                    :border="true"
                    style="margin-top: 50px"
            >
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </page-table>
        </div>
    </div>
</template>

<script>
    import TestA from '@/views/attr-listeners/test-a'
    import PageTable from '@/views/attr-listeners/page-table'
    export default {
        name: 'index',
        components: {PageTable, TestA},
        data() {
            return {
                message: 'hello world 哈哈哈哈',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            // 在test-a中的test-b父组件设置了v-bind="$attrs" v-on="$listeners"
            // 在index.vue 中的test-a组件就可以使用test-b组件里面的属性和方法
            changeMyData(val) {
                console.log('这是从A组件传过来的哈哈哈哈', val)
            }
        }
    }
</script>

<style scoped>

</style>
