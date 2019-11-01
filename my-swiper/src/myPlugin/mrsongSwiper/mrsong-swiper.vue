<template>
  <div class="mrsong">
    <div class="swiper-container" id="swiper_container">
      <div class="swiper-wrapper">
        <slot>
          <!-- 默认值 -->
          <div class="swiper-slide" v-for="(item,index) in List" :key="index">
            <p class="slide-item" :data-item="item" :data-index="index">{{item}}</p>
          </div>
        </slot>
        <!-- <div class="swiper-slide" v-for="(item,index) in List" :key="index"><slot></slot></div> -->
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css';
  let defaultData = ['slider1', 'slider2', 'slider3'];
  export default ({
    name: 'mrsongSwiper',
    // props: ['option', 'data'],
    props: {
      option: {
        type: Object,
      },
      data: {
        type: Array,
        default () {
          return ['slider1', 'slider2', 'slider3']
        }
      },
      delay:{
        type:[Number,String],
        default:1000
      }
    },
    data() {
      return {
        List: this.data,
        speedData: this.option ? (this.option.speed ? this.option.speed : 4000) : 4000,
        slidesPerViewData: this.option ? (this.option.slidesPerView ? this.option.slidesPerView : 3) : 3,
        spaceBetweenData: this.option ? (this.option.spaceBetween ? this.option.spaceBetween : 10) : 10,
      }
    },
    mounted() {
      setTimeout(()=>{
        console.log('delay',this.delay)
        this.init();
      },this.delay)
    },
    methods: {
      getItem(e) {
        console.log(e);
      },
      init() {
        let that = this;
        var mySwiper = new Swiper('.swiper-container', {
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swipe
          freeMode: true,
          loop: true,
          autoplay: {
            delay: 0
          },
          speed: this.speedData, //速度
          slidesPerView: this.slidesPerViewData, //slide可见数量(必须小于或等于swiper-slide的个数)
          spaceBetween: this.spaceBetweenData, //slide之间的距离(单位px)
          on: {
            click: function(event) {
              let dataset = {
                item: event.target.dataset.item,
                index: event.target.dataset.index,
              }
              that.$emit('sendData', dataset)
            }
          }
        })
        mySwiper.el.onmouseover = function() { //鼠标放上暂停轮播
          mySwiper.autoplay.stop();
        };
        mySwiper.el.onmouseleave = function() { //鼠标移出继续轮播
          mySwiper.autoplay.start();
        };
      }
    }
  })
</script>
<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .swiper-wrapper {
    transition-timing-function: linear !important;
  }
  .swiper-slide {
    border: 1px solid #8888;
    .slide-item {
      min-height: 40px;
      line-height: 40px;
    }
  }
</style>