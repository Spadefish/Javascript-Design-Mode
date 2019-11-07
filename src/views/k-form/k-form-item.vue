<template>
    <div>
        <label>{{label}}</label>
        <div>
            <slot></slot>
            <p v-if="errStatus">{{errMessage}}</p>
        </div>
    </div>
</template>

<script>
    import Schema from 'async-validator'
    export default {
        inject: ['kForm'],
        props: {
            label: String,
            prop: String
        },
        data() {
            return {
                errMessage: '',
                errStatus: false
            }
        },
        mounted() {
            this.$on('validate', this.validator)
        },
        methods: {
            validator() {
                // 两个input username and password
                console.log(this.kForm)
                const rules = this.kForm.rules[this.prop]
                const value = this.kForm.model[this.prop]

                // 描述对象
                const descriptor = {[this.prop]: rules}
                const schema = new Schema(descriptor)
                schema.validate({[this.prop]: value}, errors => {
                    if (errors) {
                        console.log('errors=======', errors)
                        this.errMessage = errors[0].message
                        this.errStatus = true
                    } else {
                        this.errMessage = ''
                        this.errStatus = false
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
