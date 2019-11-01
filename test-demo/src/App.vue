<template>
  <div id="app">
    <p ref="pMsg">{{msg}}</p>
    <img src="./assets/logo.png">
    <h1 ref='h1'>{{ msg1 }}</h1>
    <h1 ref='h2'>{{ msg2 }}</h1>
    <h1 ref='h3'>{{ msg3 }}</h1>
    <h2 @click="change">Essential Links</h2>
    <mrsong-swiper @sendData="getData" :delay='500'>
      <!-- <div class="swiper-slide" v-for="(item,index) in defaultData" :key="index">
        <p class="slide-item" :data-item="item" :data-index="index">{{item}}</p>
      </div> -->
    </mrsong-swiper>
    <sum-function></sum-function>
    <mrsong-countdown></mrsong-countdown>
    <test></test>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  import sumfunction from '@mrsong/my_test_project';
  import test from './components/test'
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        msg1:'msg1',
        msg2:null,
        msg3:null
      }
    },
    created(){
      
    },
    mounted() {
      console.log(sumfunction);
      console.log(test);
      this.msg=8888
      this.msg1=this.$refs.pMsg.innerHTML;
      this.msg2=this.$refs.pMsg.innerHTML;
      this.$nextTick(()=>{
        this.msg3=this.$refs.pMsg.innerHTML;
      })
    },
    components: {
      sumfunction,
      test
    },
    methods:{
      getData(e){
        console.log(e)
      },
      change(){
        if(!this.msg3){
          this.msg3='msg3';
        }else{
          this.msg3=null;
        }
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
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
