<template>
    <div>
        <h4>组件C</h4>
        <test-d v-bind="$attrs" v-on="$listeners"></test-d>
    </div>
</template>

<script>
    import TestD from '@/views/attr-listeners/test-d'
    export default {
        name: 'test-c',
        components: {TestD}
    }
</script>

<style scoped>

</style>
