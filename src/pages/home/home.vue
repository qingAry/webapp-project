<template>
  <div class="home-container">
    <!--首页头部 -->
    <div class="header">
      <div class="logo">
        <a href="javascript:;">
          <img src="../../assets/logo.png" alt="">
        </a>
      </div>
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input class="txt" type="text" placeholder="搜索商品，共332件好物">
      </div>
      <div class="btn" @click="toLogin">登录</div>
    </div>
    <!-- 首页导航 -->
    <div class="home-nav">
      <template>
        <div class="nav-wrapper" ref="navScroll">
          <div class="nav-content" v-if="indexDatas.kingKongModule">
            <div class="nav-item" 
            v-for="(navItem,index) in indexDatas.kingKongModule.kingKongList"
            :key="index"
            :class="{active:currentIndex === index}"
            @click="changeIndex(index)"
            >
              <span>{{navItem.text}}</span>
            </div>
          </div>
        </div>
        <i class="iconfont icon-fenlei" @click="changeShow"></i>
      </template>
      <!-- 首页点击图片是否展示 -->
      <div class="nav-box" :class="{show:!isShow}" @click="changeShow">
      </div>
    </div>
    <!-- 首页商品页面的展示 -->
    <!-- <Recommend :indexDatas="indexDatas"></Recommend> -->
    <CategoryList></CategoryList>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core'
  import { reqCateNavDatas,reqIndexDatas } from '../../utils/index'
  import Recommend from '../../components/recommend/recommend'
  import CategoryList from '../../components/categoryList/categoryList'
  export default {
    components:{
      Recommend,
      CategoryList
    },
    data(){
      return {
        indexDatas:{},
        cateNavDatasList:[],
        currentIndex:0,
        isShow:false
      }
    },
    mounted() {
        this.getCateNavDatas()
        // 获取首页信息
        this.getIndexDatas()
        // 滚轮
        // this.$nextTick(() => {
        //   console.log('............',this.indexDatas)
        //   this.initScroll()
        // // })
    },
    watch: {
      indexDatas:function(){
        this.$nextTick(() => {
          // console.log('............',this.indexDatas)
          this.initScroll()
        })
      }
    },
    methods: {
      // 滚动
      initScroll() {
        this.bs = new BScroll(this.$refs.navScroll, {
          scrollX: true,
          click:true,
          probeType: 3
        })
        this.hadleHooks(['scroll', 'scrollEnd'], (pos) => {
          // console.log('滚动了')
        })
      },
      hadleHooks(hookNames, handler) {
        hookNames.forEach((name) => {
          this.bs.on(name, handler)
        })
      },
      // 发送请求获取首页信息
      async getCateNavDatas (){
        let result = await reqCateNavDatas()
        // console.log(result.categoryL1List)
        this.cateNavDatasList = result.categoryL1List
      },
      //发送请求 获取导航栏数据
      async getIndexDatas (){
        let result = await reqIndexDatas()
        // console.log(result.kingKongModule.kingKongList)
        this.indexDatas = result
      },
      changeIndex(index){
        console.log('改变')
        this.currentIndex = index
      },
      changeShow(){
        this.isShow = !this.isShow
      }
      ,
      toLogin(){
        console.log('登录')
      }
    }
  }
</script>

<style  lang="stylus" scoped>
  .home-container
    width 100%
    min-height calc(100vh - 80px)
    padding-bottom 100px
    .header
      display flex
      align-items center
      width 100%
      height 80px
      line-height 80px
      padding 10px 20px
      .logo
        width 138px
        height 60px
        line-height 60px
        img 
          width 100%
          height 40px
          vertical-align middle
      .search
        position relative
        width 450px
        height 60px
        line-height 60px
        margin 0 15px
        padding 0 60px
        box-sizing border-box
        border-radius 10px
        background #ededed
        .iconfont
          position absolute
          left 20px
          top 0
          font-size 29px
        .txt
          width 100%
          background #ededed
          font-size 28px
      .btn
        width 70px
        height 40px
        line-height 40px
        color #DD1A21
        text-align center
        border 1px solid #DD1A21
        border-radius 8px
    .home-nav
      position relative
      .iconfont
        position absolute
        right 40px
        top 10px
        font-size 40px
      .nav-wrapper
        width 80%
        white-space nowrap
        overflow hidden
        .nav-content
          display inline-block
        .nav-item
          height 50px
          line-height 50px
          display inline-block
          text-align center
          padding 0 10px
          margin 0 10px
          margin-bottom 5px
          span
            font-size 28px
          &.active
            border-bottom 4px solid #dd1a21
      .nav-box
        position absolute
        left 0
        top 0
        z-index 6
        width 100%
        height 350px
        background #fff
        &.show
          display none
  .test
    font-size 0
</style>
