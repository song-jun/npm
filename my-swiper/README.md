# @mrsong/swiper

> A Vue.js project

## Build Setup


## 组件特色
解决swiper无缝滚动加入loop之后，点击事件失效的问题

``` bash

# 使用方法
1.npm i @mrsong/swiper -D
2.全局注册组件
import mrsongSwiper from 'mrsong-swiper'
Vue.component('mrsongSwiper',mrsongSwiper)
3.使用组件
<mrsong-swiper @sendData="getData" :delay='500'>
    <!-- <div class="swiper-slide" v-for="(item,index) in defaultData" :key="index">
        <p class="slide-item" :data-item="item" :data-index="index">{{item}}</p>
    </div> -->
</mrsong-swiper>
4.参数说明（参数可选）
delay:500（延时，默认500）;
sendData：获取swiper当前点击的DOM;
option:swiper的参数配置;
例如：
option:{
    speed: 4000, //速度
    slidesPerView: 3, //slide可见数量(必须小于或等于swiper-slide的个数)
    spaceBetween: 10, //slide之间的距离(单位px)
}
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
