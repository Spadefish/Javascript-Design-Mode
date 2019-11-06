<template>
  <div>
    <h1>这是单例模式学习</h1>
    <test-demo ref="testDemo">我是slot哈哈哈哈</test-demo>
    <div id="test"></div>
  </div>
</template>

<script>
import TestDemo from '@/views/single-case/test-demo'
export default {
  name: 'single-case',
  components: {TestDemo},
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    // console.log(this)
    // console.log(this.$slots)
  }
}
</script>
