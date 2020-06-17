<template>
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/images/banner-2.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/images/1617045_1_1_wap_727631487696e9635e5d3e33371b20f9.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/images/1617045_1_1_wap_727631487696e9635e5d3e33371b20f9.jpg" alt="">
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  export default {
     mounted() {
       new Swiper (this.$refs.swiperContainer, {
          // direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项
          
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          }
          
        })        
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width 100%
    height 365px
    .swiper-wrapper
      .swiper-slide
        img
          width 100%
          height auto
    /deep/.swiper-pagination-bullets
      margin-bottom 20px
      .swiper-pagination-bullet
        background #fff
        width 40px
        height 4px
        border-radius 10px
        opacity .4
      .swiper-pagination-bullet-active
        opacity 1
</style>
