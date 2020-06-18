<template>
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
          <div class="swiper-slide"
               v-for="(bannerItemUrl,index) in bannerList"
               :key="index"
          >
            <img :src="bannerItemUrl" alt="">
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  export default {
     props:{
       bannerList:Array
     },
     mounted() {
       new Swiper (this.$refs.swiperContainer, {
          // direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项
          autoplay:true,
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
