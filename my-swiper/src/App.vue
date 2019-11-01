<template>
  <div id="app">
    <mrsong-swiper @sendData="getData" :delay='500'>
      <!-- <div class="swiper-slide" v-for="(item,index) in defaultData" :key="index">
        <p class="slide-item" :data-item="item" :data-index="index">{{item}}</p>
      </div> -->
    </mrsong-swiper>
    <div v-show="hide">swiper</div>
    <!-- <swiper :options="swiperOption">
        <swiper-slide>
          <p data-index="1">1</p>
        </swiper-slide>
        <swiper-slide>
          <p data-index="2">2</p>
        </swiper-slide>
        <swiper-slide>
          <p data-index="3">3</p>
        </swiper-slide>
        <swiper-slide>as
          <p data-index="4">4</p>
        </swiper-slide>
        <swiper-slide>
          <p data-index="5">5</p>
        </swiper-slide>
        <swiper-slide>
          <p data-index="6">6</p>
        </swiper-slide>
      </swiper>-->
  </div>
</template>

<script>
  import mrsongSwiper from "./myPlugin/mrsongSwiper/mrsong-swiper";
  export default {
    name: "app",
    data() {
      return {
        hide: true,
        swiperOption: {
          //swiper3
          autoplay: 1, //自动滚动
          loop: true, //循环
          speed: 2000, //滚动速度
          freeMode: true,
          autoplay: {
            delay: 0
          },
          slidesPerView: 3, //slide可见数量
          spaceBetween: 8, //slide之间的距离（单位px）
          // 点击事件，避免在dom上绑定事件时，loop复制的dom无点击事件
          on: {
            click: function(event) {
              let dataset = event.target.dataset;
              console.log(dataset);
              console.log(this);
            }
          }
        },
       
        msg: "Welcome to Your Vue.js App",
        defaultData: [1, 2, 3, 4]
      };
    },
    mounted() {
      console.log('mrsongSwiper',mrsongSwiper);
    },
    components: {
      mrsongSwiper
    },
    methods: {
      getData(e) {
        console.log("e", e);
      }
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
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
  .swiper-wrapper {
    transition-timing-function: linear !important;
  }
  .swiper-slide {
    border: 1px solid #8888;
  }
</style>
