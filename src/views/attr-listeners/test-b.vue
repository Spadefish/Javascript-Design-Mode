<template>
    <div>
        <h3>组件B</h3>
        <test-c v-bind="$attrs" v-on="$listeners"></test-c>
    </div>
</template>

<script>
    import TestC from '@/views/attr-listeners/test-c'
    export default {
        name: 'test-b',
        components: {TestC}
    }
</script>

<style scoped>

</style>
