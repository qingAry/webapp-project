<template>
	<div id="app">
		<!-- 路由匹配到的组件将渲染在这里 -->
  	<router-view></router-view>
		<!-- 底部 -->
		<div class="footer">
			<nav class="footer-container">
				<div class="footer-item active">
					<i class="iconfont icon-shouye"></i>
					<span>首页</span>
				</div>
				<div class="footer-item">
				 <i class="iconfont icon-fenlei"></i>
				 <span>分类</span>
				</div>
				<div class="footer-item">
					<i class="iconfont icon-maidan"></i>
					<span>值得买</span>
				</div>
				<div class="footer-item">
					<i class="iconfont icon-gouwuche"></i>
					<span>购物车</span>
				</div>
				<div class="footer-item">
					<i class="iconfont icon-geren"></i>
					<span>个人</span>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
	export default {
		components:{
		},
		data(){
			return {

			}
		},
		mounted() {
		},
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
	.footer
		position fixed
		bottom 0
		width 100%
		.footer-container
			display flex
			justify-items center
			width 100%
			height 100px
			box-sizing border-box
			border-top 1px solid #ededed
			background-color #fff
			padding-top 5px
			.footer-item
				display flex
				flex-direction column
				text-align center
				width 20%
				.iconfont
					font-size 40px
					margin-bottom 5px
				span
					font-size 24px
				&.active
					color red
	.test 
		font-size 0
</style>
