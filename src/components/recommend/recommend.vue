<template>
  <div  ref="recommendContiner" class="wrap">
    <div class="recommend-continer">
      <!-- 轮播图 -->
      <div>
        <mySwiper :bannerList="bannerList"></mySwiper>
      </div>
      <!-- 底部商品的展示区域 -->
      <div class="servicePolicy">
        <div class="policy-item" 
          v-for="(policyItem,index) in indexDatas.policyDescList"
          :key="index"
        >
          <i class="policy-img">
            <img :src="policyItem.icon" alt="">
          </i>
          <span class="policy-text">{{policyItem.desc}}</span>
        </div>
      </div>
      <!--商品小图展示列表 -->
      <div class="shop-icons" v-if="indexDatas.kingKongModule">
        <div class="icon-item"
          v-for="(navList,index) in indexDatas.kingKongModule.kingKongList"
          :key="index"
        >
          <div class="icon">
            <img :src="navList.picUrl" alt="">
          </div>
          <span class="icon-name">{{navList.text}}</span>
        </div>
      </div>

      <!-- 新人首单 -->
      <div class="newPerson">
        <div class="newPersonPolicy">
          <div class="turn-img">
            <img src="https://yanxuan-item.nosdn.127.net/674fd7a8184ca8af9a471a602eb9d564.png" alt="">
          </div>
        </div>
        <div class="banner-img">
          <img src="https://yanxuan.nosdn.127.net/05cace191d9c7ea345b527808341a72e.png" alt="">
        </div>
        <div class="img-list">
          <div class="img-item">
            <img src="https://yanxuan.nosdn.127.net/55ce7a7afa61c743567a1213cb09caee.png" alt="">
          </div>
          <div class="img-item">
            <img src="https://yanxuan.nosdn.127.net/55ce7a7afa61c743567a1213cb09caee.png" alt="">
          </div>
          <div class="img-item">
            <img src="https://yanxuan.nosdn.127.net/55ce7a7afa61c743567a1213cb09caee.png" alt="">
          </div>
        </div>
      </div>
      <!-- 新人专享礼 -->
      <div class="freshmanModule">
        <div class="freshmanModule-title">
            <span class="txt">新人专享礼</span>
        </div>
        <div class="imgsList">
            <div class="one-img">
              <span>新人专享礼包</span>
              <img src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
            </div>
            <div class="two-img">
              <div class="module1" v-if="indexDatas.indexActivityModule">
                <div class="module1-name">
                    <div>{{indexDatas.indexActivityModule[0].title}}</div>
                    <div class="small">{{indexDatas.indexActivityModule[0].subTitle}}</div>
                </div>
                <div class="module1-img">
                  <img class="img-size" :src="indexDatas.indexActivityModule[0].showPicUrl" alt="">
                </div>
              </div>
              <div class="module2">
                  <div class="module1-name">
                      <div>新人拼团</div>
                      <div class="small">今日特价</div>
                  </div>
                  <div class="module1-img">
                    <img class="img-size" src="https://yanxuan-item.nosdn.127.net/f978a6eeba806149e90ded5c444617f9.png" alt="">
                  </div>
              </div>
            </div>
        </div>
      </div>

      <!-- 类目热销榜 -->
      <div class="hot-catagory" v-if="indexDatas.categoryHotSellModule">
          <div class="title">
            <h3>{{indexDatas.categoryHotSellModule.title}}</h3>
          </div>
          <div class="content">
             <div class="content-top">
                <div class="left">
                    <div class="txt">
                      <span>{{indexDatas.categoryHotSellModule.categoryList[0].categoryName}}</span>
                    </div>
                    <img :src="indexDatas.categoryHotSellModule.categoryList[0].showPicUrl" alt="">
                </div>
                <div class="right">
                  <div class="txt">
                    <span>{{indexDatas.categoryHotSellModule.categoryList[1].categoryName}}</span>
                  </div>
                  <img :src="indexDatas.categoryHotSellModule.categoryList[1].showPicUrl" alt="">
                </div>
             </div>
             <div class="content-bottom">
                <div class="content-item"
                    v-if="index>1"
                    :key="index"
                    v-for="(item,index) in indexDatas.categoryHotSellModule.categoryList"
                >
                  <div class="content-title">{{item.categoryName}}</div>
                  <div class="content-img">
                    <img :src="item.showPicUrl" alt="">
                  </div>
                </div>
                
             </div>
             
          </div>
      </div>

      <!-- 限时购 -->
      <div class="time-buy">
          <div class="module-title">
              <div class="left">
                <span class="text">限时购</span>
                <span class="time">00:00:00</span>
              </div>
              <div class="right">
                更多>
              </div>
          </div>
          <div class="module-content" v-if="indexDatas.flashSaleModule">
              <div class="module-item" 
                  v-for="(items,index) in indexDatas.flashSaleModule.itemList"
                  :key="items.itemId"
              >
                <div class="top-img">
                  <img :src="items.picUrl" alt="">
                </div>
                <div class="price">
                  <span class="actualPrice">¥{{items.activityPrice}}</span>
                  <span class="retailPrice">¥{{items.originPrice}}</span>
                </div>
              </div>
          </div>
      </div>

      <!-- 新品首发 -->
      <div class="new-shops">
        <div class="module-title">
          <span class="left">新品首发</span>
          <div class="right">
            <span>更多></span>
          </div>
        </div>
        <div class="module-content">
            <div class="module-item" 
              v-if="index<6"
              v-for="(newItem,index) in indexDatas.newItemList"
              :key="index"
            >
              <div class="top-img">
                <img :src="newItem.showPicUrl" alt="">
              </div>
              <div class="txt">
                  <span>{{newItem.simpleDesc}}</span>
              </div>
              <div class="price">
                <span class="actualPrice">¥75</span>
              </div>
            </div>
        </div>
      </div>
      
      <!-- 底部 -->
      <div class="footer-wraper">
        <div class="footer-content">
          <div class="footer-top">
              <div class="one">下载APP</div>
              <div class="two">电脑版</div>
          </div>
          <p>
            网易公司版权所有 © 1997-
            <br><br>
            食品经营许可证：JY13301080111719
          </p>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core'
  import mySwiper from '../mySwiper/mySwiper'
  export default {
    props:{
      indexDatas:Object
    },
    mounted() {
    //  setTimeout(() => {
    //    this.initScroll()
    //  }, 1000);
    },
    watch:{
        indexDatas:function() {
          this.$nextTick(() => {
            this.initScroll()
          })
        }
    },
    methods:{
      // 滚动
      initScroll() {
        new BScroll(this.$refs.recommendContiner, {
          scrollY: true,
          click:true,
          bounce: false
        })
      }
    },
    data(){
      return{
        bannerList:[
          'https://yanxuan.nosdn.127.net/d9cfb21a1b40f8cc73ec4fb4ba2a0a79.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'http://yanxuan-miaobi.nos-jd.163yun.com/1664015_1_4_wap_727631487696e9635e5d3e33371b20f9.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/312792df0b7970f73676111c731a7721.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/db1b51a817ef9e318e0268b8b17b3781.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/c8f6ea8569234c98d5f33c757b3b7960.jpg?type=webp&imageView&quality=75&thumbnail=750x0'

        ]
      }
    },
    components:{
      mySwiper
    }
   
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  height calc(100vh - 265px)
  overflow hidden
  background #ededed
  .recommend-continer
    .servicePolicy
      display flex
      width 100%
      height 70px
      line-height 70px
      background-color #fff
      .policy-item
        flex 1
        text-align center
        .policy-img
          width 32px
          height 32px
          img
            width 32px
            height 32px
            vertical-align middle
        .policy-text
          font-size 24px
          margin-left 15px
          vertical-align middle
    .shop-icons
      display flex
      flex-wrap wrap
      width 100%
      // height 300px
      text-align center
      background-color #fff
      padding-bottom 10px
      .icon-item
        width 20%
        margin-top 20px
        .icon
          margin-bottom 10px
          img 
            width 110px
            height 110px
        .icon-name
          font-size 24px
    .newPerson
      width 100%
      background-color rgb(177, 0, 17)
      .newPersonPolicy
        position relative
        width 100%
        height 240px
        background url('https://yanxuan.nosdn.127.net/e73d6d0b28648d1204623d28ea175447.gif') 
        background-repeat no-repeat
        background-size 100% 100%
        .turn-img
          width 168px
          height 168px
          position absolute
          left 75px
          top 50px
          img
            width 168px
            height 100%
      .banner-img
        width 100%
        height 80px
        img
          width 100%
          height 100%
      .img-list
        display flex
        width 100%
        margin-top 10px
        padding 0 10px
        .img-item
          margin-bottom 10px
          margin-left 10px
          img
            width 230px
            height 220px

    .freshmanModule
      width 100%
      background-color #fff
      margin-top 20px
      padding-bottom 30px
      .freshmanModule-title
        width 100%
        height 90px
        line-height 90px
        text-align center
        .txt
          position relative
          font-size 32px
          color #333
          &:before
            content ''
            position absolute
            left -40px
            top 20px
            width 24px
            height 3px
            background #333
          &:after
            content ''
            position absolute
            right -40px
            top 20px
            width 24px
            height 3px
            background #333

      .imgsList
        display flex
        justify-content center
        width 100%
        height 438px
        .one-img
          width 343px
          height 100%
          margin-right 10px
          box-sizing border-box
          padding 30px 0 0 20px
          background #F9E9CF
          span
            font-size 32px
            color #333
          img
            display block
            width 258px
            height 257px
            margin 60px auto
        .two-img
          width 343px
          height 100%
          .module1
            width 100%
            height 50%
            display flex
            background #FBE2D3
            .module1-name
              font-size 32px
              color #333
              margin 20px 20px
              .small
                font-size 24px
                margin-top 15px
                color #7f7f7f
            .module1-img
              position relative
              margin-right -100px
              margin-top 10px
              .img-size 
                width 200px
                height 200px
              &:before
                content '¥89'
                position absolute
                top 20px
                right 5px
                text-align center
                color #fff
                width 80px
                height 80px
                line-height 80px
                background #F59524
                border-radius 50%
          .module2
            width 100%
            height 50%
            margin-top 5px
            display flex
            background #FFECC2
            .module1-name
              font-size 32px
              color #333
              margin 20px 20px
              .small
                font-size 24px
                margin-top 15px
                color #7f7f7f
            .module1-img
              position relative
              margin-right -100px
              margin-top 10px
              .img-size 
                width 200px
                height 200px
                margin-right -30px
                margin-top 20px
              &:before
                content '¥89'
                position absolute
                top 20px
                right 5px
                text-align center
                color #fff
                width 80px
                height 80px
                line-height 80px
                background #F59524
                border-radius 50%
    .hot-catagory
      width 100%
      padding 0 20px
      background-color #fff
      margin-top 20px
      padding-bottom 20px
      .title
        width 100%
        height 100px
        line-height 100px
        font-size 32px
        color #333
      .content
        width 100%
        .content-top
          display flex
          width 100%
          &>div
            display flex
            width 340px
            height 200px
            background #F9F3E4
            &.right
              margin-left 15px
              background #EBEFF6
            &>.txt
              font-size 28px
              color #333
              margin 30px
              margin-top 80px
              span
                position relative
                &:after
                  content ''
                  position absolute
                  left 0
                  top 50px
                  width 48px
                  height 4px
                  background #333
            &>img
              width 200px
              height 200px

        .content-bottom
          width 100%
          display flex
          flex-wrap wrap
          .content-item
            width 165px
            height 180px
            margin-right 12px
            margin-top 10px
            text-align center
            background #F5F5F5
            border-radius 10px
            overflow hidden
            .content-title
              margin-top 10px
              font-size 24px
              color #333
            .content-img
              width 120px
              height 120px
              img
                margin atuo 0
                margin-left 20px
                width 120px
                height 120px

    .time-buy
      width 100%
      background-color #fff
      margin-top 20px
      .module-title
        display flex
        justify-content space-between
        box-sizing border-box
        width 100%
        height 100px
        line-height 100px
        font-size 32px
        padding 0 25px
        .left
          .time
            margin-left 10px
      .module-content
        display flex
        flex-wrap wrap
        padding 0 25px 0
        .module-item
          width 216px
          height 300px
          margin 0 15px 15px 0
          text-align center
          .top-img
            background #F5F5F5
            img
              width 216px
              height 216px
          .price
            font-size 28px
            .actualPrice
              color #DD1A21
            .retailPrice
              color #7F7F7F
              text-decoration line-through
              margin-left 10px


    .new-shops
      width 100%
      background-color #fff
      margin-top 20px
      padding-bottom 40px
      .module-title
        display flex
        justify-content space-between
        box-sizing border-box
        width 100%
        height 100px
        line-height 100px
        font-size 32px
        padding 0 25px
      .module-content
          display flex
          flex-wrap wrap
          padding 0 25px 0
          .module-item
            width 216px
            height 300px
            margin 30px 15px 15px 0
            text-align center
            .top-img
              background #F5F5F5
              &>img
                width 216px
                height 216px
            .txt
              width 216px
              font-size 24px
              color #333
              margin-top 15px
              text-align left
              display -webkit-box
              overflow hidden
              text-overflow ellipsis
              -webkit-box-orient vertical /*设置内部子元素的对其方式*/
              -webkit-line-clamp 2
              &>span
                line-height 35px
            .price
              margin-top 5px
              font-size 28px
              .actualPrice
                color #DD1A21
    .footer-wraper
      width 100%
      padding-bottom 20px
      background-color #414141
      .footer-content
        text-align center
        padding 50px 80px 20px
        .footer-top
          display flex
          color #fff
          margin-left 100px
          font-size 24px
          &>div
            border 1px solid #999
            width 172px
            height 62px
            line-height 62px
          .one
            margin-right 50px
        &>p
          color #999
          margin-top 40px
// #text
</style>
