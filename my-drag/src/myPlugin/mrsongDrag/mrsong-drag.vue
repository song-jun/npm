<template>
  <div class="mrsong">
    <div class="drag-box">
      <div class="drag-left">左边部分</div>
      <div class="drag-right">右边部分</div>
      <!-- 分隔条 -->
      <div class="drag-line"></div>
    </div>
  </div>
</template>
<script>
  export default ({
    name: 'mrsongDrag',
    // props: ['option', 'data'],
    props: {
      data: {
        type: Array,
        default () {
          return '';
        }
      },
    },
    data() {},
    mounted() {
      this.init()
    },
    methods: {
      getItem(e) {
        console.log(e);
      },
      init() {
      }
    }
  })
</script>
<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .drag-box {
    position: relative;
    width: 800px;
    height: 300px;
    margin: 20px auto;
  }
  .drag-left {
    width: 200px;
    background: #ffdd40;
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .drag-right {
    margin-left: 220px;
    background: pink;
    height: 100%;
  }
  .drag-line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 209px;
    width: 4px;
    background: #e7e7e7;
    box-shadow: 0px 0px 8px #ccc;
    cursor: w-resize;
  }
</style>