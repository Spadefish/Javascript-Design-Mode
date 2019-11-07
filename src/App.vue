<template>
  <div id="app">
    <div>
      <router-link to="/single-case">单例模式</router-link>
      <router-link to="/attrs-listeners">$attrs和$listeners学习</router-link>
      <router-link to="/k-form">表单组件</router-link>
    </div>
    <pre></pre>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
