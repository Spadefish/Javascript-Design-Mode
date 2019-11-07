<template>
    <div>
        <k-form :model="model" :rules="rules" ref="loginForm">
            <k-form-item label="用户名" prop="username">
                <k-input v-model="model.username"></k-input>
            </k-form-item>
            <k-form-item label="密码" prop="password">
                <k-input v-model="model.password" type="password"></k-input>
            </k-form-item>
        </k-form>
        <button @click="submitForm('loginForm')">提交</button>
    </div>
</template>

<script>
    import KInput from './k-input'
    import KFormItem from './k-form-item'
    import KForm from './k-form'

    export default {
        name: 'index',
        components: {
            KInput,
            KFormItem,
            KForm
        },
        data() {
            return {
                model: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名'},
                        {min: 6, max: 10, message: '请输入6~10的用户名'}
                    ],
                    password: [
                        {required: true, message: '请输入密码'},
                        {min: 6, max: 10, message: '请输入6~10的密码'}
                    ],
                }
            }
        },
        methods: {
            submitForm(form) {
                // console.log(this.$refs)
                this.$refs[form].validate(valid => {
                    if (valid) {
                        console.log('提交成功哈哈哈哈')
                    } else {
                        console.log('提交失败')
                    }
                })
            }
        }

    }
</script>

<style scoped>

</style>
