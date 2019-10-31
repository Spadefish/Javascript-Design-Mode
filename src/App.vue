<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <van-button type="primary" size="large" @click="handleClick">点击测试哈哈哈大号按钮</van-button>
    <van-button type="primary" size="normal">普通按钮</van-button>
    <van-button type="primary" size="small">小型按钮</van-button>
    <van-button type="primary" size="mini">迷你按钮</van-button>
  </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld'
    import {throttle} from 'lodash'

    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        methods: {
            getData: throttle(function () {
                console.log('获取到数据了')
            }, 2000),
            handleClick() {
              this.getData()
            }
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
