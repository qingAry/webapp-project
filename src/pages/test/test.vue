<template>
  <div class="home-nav">
    <div class="nav-wrapper" ref="navScroll">
      <div class="nav-content">
        <div class="nav-item">推荐</div>
        <div class="nav-item">推荐</div>
        <div class="nav-item">推荐</div>
        <div class="nav-item">推荐</div>
        <div class="nav-item">推荐</div>
        <div class="nav-item">推荐</div>
        <div class="nav-item">推荐</div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core'

  export default {
    data () {
      return {
      }
    },
    mounted() {
      this.initScroll()
    },
  
    methods: {
      initScroll() {
        this.bs = new BScroll(this.$refs.navScroll, {
          scrollX: true,
          probeType: 3 // listening scroll hook
        })
        this.hadleHooks(['scroll', 'scrollEnd'], (pos) => {
          console.log('滚动了')
        })
      },
      hadleHooks(hookNames, handler) {
        hookNames.forEach((name) => {
          this.bs.on(name, handler)
        })
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
.home-nav
  .nav-wrapper
    width 100%
    white-space nowrap
    overflow hidden
    .nav-content
      display inline-block
    .nav-item
      height 50px
      line-height 50px
      font-size 24px
      display inline-block
      text-align center
      padding 0 10px
</style>