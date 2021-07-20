<template>
<div id="detail">
  <detailNavbar class="detailnav" @curredinex='btnindex' ref="detailbar"></detailNavbar>
  <scroll  :probe-type="3" :pull-up-load="true" class="cont" ref="detail" @scrol="curredscroll"> 
    <detailSwiper :banners='swapimg'></detailSwiper>
    <detailBaseInfo :goods="Goods"></detailBaseInfo>
    <detailShopInfo :shopInfo="Shop"></detailShopInfo>
    <detailGoodsInfo :detailInfo="detailInfo" @imageLoad='imgageLoad'></detailGoodsInfo>
    <detailparamInfo :itemParam="GoodsParam" ref="paramInfo"></detailparamInfo>
    <detailCommentInfo :commentsInfo="commentInfo" ref="commentInfo"></detailCommentInfo>
    <detailrecommend :recommend="recommend" ref="recommend"></detailrecommend>
  </scroll>
  <detailbottombar @butbtn="buybtn"></detailbottombar>
  <backtop @click.native="backtop" v-show="isShow"></backtop>
  <toast :message='mess' :isshow="istoast"></toast>
</div>
  
</template>

<script>
import detailNavbar from 'views/detail/childComps/detailNavbar.vue'
import {getdetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import detailSwiper from 'views/detail/childComps/detailSwiper.vue'
import detailBaseInfo from 'views/detail/childComps/detailBaseInfo.vue'
import detailShopInfo from 'views/detail/childComps/detailShopInfo.vue'
import scroll from 'components/common/Scroll/scroll.vue'
import {decounce} from 'common/utils.js'
import detailGoodsInfo from 'views/detail/childComps/detailGoodsInfo.vue'
import detailparamInfo from 'views/detail/childComps/detailparamInfo.vue'
import detailCommentInfo from 'views/detail/childComps/detailCommentInfo.vue'
import detailrecommend from 'views/detail/childComps/detailrecommend.vue'
import detailbottombar from 'views/detail/childComps/detailbottombar.vue'
import { backtopMixin} from 'common/mixin.js'
import toast from 'components/common/toast/toast.vue'

export default {
  name:"detail",
  mixins:[backtopMixin],
  data() {
    return {
      iid:null,
      swapimg:[],
      Goods:{},
      Shop:{},
      detailInfo:{},
      GoodsParam:{},
      commentInfo:{},
      recommend:[],
      scrollindexY:[0,0,0,0],
      decounceindex:null,
      currentedindex:0,
      istoast:false,
      mess:''


    }
  },
  created() {
    this.iid=this.$route.params.id
    this.getdetails()
    this.getRecomm()
    this.decounceindex=decounce(() =>{
      if(this.$refs.paramInfo){
        this.scrollindexY[1]=-this.$refs.paramInfo.$el.offsetTop
      }
      if(this.$refs.commentInfo){
        this.scrollindexY[2]=-this.$refs.commentInfo.$el.offsetTop
      }
      if(this.$refs.recommend){
        this.scrollindexY[3]=-this.$refs.recommend.$el.offsetTop
      }
        
    },500)
   
    
  },
  
  methods: {
    getdetails(){
      getdetail(this.iid).then( res =>{
        //获取轮播图图片
        this.swapimg=res.result.itemInfo.topImages
        //  console.log(res)
        //获取商品信息
        this.Goods=new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
        //获取店铺信息
        this.Shop =new Shop(res.result.shopInfo)
        //获取商品详细信息
        this.detailInfo=res.result.detailInfo
        //获取商品参数信息
        this.GoodsParam =new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
        //取出商品的评论信息
        if(res.result.rate.cRate !==0){
          this.commentInfo =res.result.rate.list[0]
        }
      })
    },
    getRecomm(){
      getRecommend().then(res =>{
        this.recommend= res.data.list

      })

    },
    imgageLoad(){    
       this.$refs.detail.refresh()
        //  获取新的offsetTop
        this.decounceindex()  
    },
    btnindex(index){
      this.$refs.detail.scroll.scrollTo(0,this.scrollindexY[index],300)
    },
    curredscroll(position){ 
      const positionY=position.y
      //判断backtop的显示
      this.isShow=(-positionY) >1000

      let len=this.scrollindexY.length
      // console.log(position.y)
      for(let i=0;i<len;i++){
        if((this.currentedindex !==i)&&((i<len-1 && positionY < this.scrollindexY[i] && positionY >= this.scrollindexY[i+1])||(i==len-1 && positionY <= this.scrollindexY[i]))){  
          this.currentedindex=i
          this.$refs.detailbar.currindex=this.currentedindex

        }
      }
    },
    backtop(){
      this.$refs.detail.scroll.scrollTo(0,0,500) 
    },
    buybtn(){
      const obj={}
      obj.iid=this.iid
      obj.imgURL=this.swapimg[0]
      obj.title=this.Goods.title
      obj.desc=this.Goods.desc
      obj.price=this.Goods.realPrice
      this.$store.dispatch('addcart',obj).then(res =>{
        this.mess=res
        this.istoast=true
        setTimeout(()=>{
          this.istoast=false
        },1500)
        //console.log(res)
      })
    }
  },
  updated() {
     //  获取新的offsetTop
        this.decounceindex()    
  },
  mounted() {
    
    const re=decounce(this.$refs.detail.refresh,500)
    this.$bus.$on('sload',()=>{
      this.$refs.detail && re()
    })
    this.$bus.$on('showdetail',()=>{
       this.$refs.detail && re()
      //  获取新的offsetTop
        this.decounceindex()
    })
  
      
  },
  components:{
    detailNavbar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    scroll,
    detailGoodsInfo,
    detailparamInfo,
    detailCommentInfo,
    detailrecommend,
    detailbottombar,
    toast
  }

}
</script>

<style scoped>

#detail{
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
  
}
#detail .cont{
  height: calc(100% - 44px - 58px);
  overflow: hidden;
  
}
</style>