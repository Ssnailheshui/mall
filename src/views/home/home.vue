<template>
<div id="home">
  
  <navbar class="home-nav">    
      <template v-slot:center >
        <div>
          购物街
        </div>
      </template>     
  </navbar>
    <tab-control :title="['流行','新品','精选']" @btnchange="btn" ref="tabControl1"  v-show="isShowTab" class="tabControl"></tab-control>
    <scroll class="contend" ref="scr" :probe-type="3" @scrol="scrol" :pull-up-load="true"  @pullingUp="showmore">
    <HomeSwiper :banner="banners" @iload="imgload"></HomeSwiper>
    <recomm-bar :recomm=" recommends"></recomm-bar>
    <popular-week :popu="recommends"></popular-week>     
    <tab-control :title="['流行','新品','精选']" @btnchange="btn" ref="tabControl" ></tab-control>     
    <goods :goods="showGoods"></goods>
      
  </scroll>
  <backtop @click.native="backtop" v-show="isShow"></backtop>
</div>
  
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import {getHomeMultidata,getHomeGoods} from "network/home";
import HomeSwiper from 'views/home/childComps/HomeSwiper';
import PopularWeek from './childComps/PopularWeek'
import RecommBar from './childComps/RecommBar.vue';
import TabControl from 'components/content/TabControl.vue';
import goods from 'components/content/goods/goods.vue';
import scroll from 'components/common/Scroll/scroll.vue'
import backtop from 'components/content/backTop/backtop.vue';
import {decounce} from 'common/utils.js'
export default {
  components:{
    navbar,
    HomeSwiper,
    RecommBar,
    PopularWeek,
    TabControl,
    goods,
    scroll,
    backtop
  },
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop' :{ page:0,list:[]},
        'new' :{ page:0,list:[]},
        'sell' :{ page:0,list:[]}
      },
      type:['pop','new','sell'],
      curredtype:0,
      isShow:false,
      tcontrol:0,
      isShowTab:false
    }
  },
  created() {
    this.getHomeMultidata1(),
    this.getHomeGoods1('pop')
    this.getHomeGoods1('new')
    this.getHomeGoods1('sell')
    
  },
  mounted() {
    const re=decounce(this.$refs.scr.refresh,500)
    this.$bus.$on('showimg',()=>{
       this.$refs.scr && re()
    })
      
  },
  
  
  methods: {
    /* 网络请求方法 */
    getHomeMultidata1(){
      getHomeMultidata().then(res =>{
      this.banners=res.data.banner.list
      this.recommends=res.data.recommend.list
       
      //  this.recommends=res.lists
      })
    },
    getHomeGoods1(type){
      const page= this.goods[type].page+1;
      getHomeGoods(type,page).then(res =>{
      
      //将新请求过来的数据拼接在数组后面
      this.goods[type].list.push(...res.data.list)
      //将页数++
      this.goods[type].page=page
      })
    },
    /* 点击事件方法
    子组件抛出的值将会作为第一个参数传入父组件的方法： */
    btn(index){
     
     this.curredtype=index
     console.log(this.type[this.curredtype])
     this.$refs.tabControl1.currentedIndex=index
     this.$refs.tabControl.currentedIndex=index
    },
    /* 点击回到顶部，监听点击按钮，然后访问滚轮子组件后调用方法
     */
    backtop(){
     this.$refs.scr.scroll.scrollTo(0,0,500) 
    },
    /* 
    将子组件中的位置信息传值给父组件，通过子传父自定义事件的形式 
    当y坐标大于1000时，显示按钮*/
    scrol(position){
      this.isShow=(-position.y) >1000

      // if((-position.y)>this.tcontrol){
       
      //   this.isShowTab=true
        
      // }else{
      //   this.isShowTab=false
      // }
      this.isShowTab = (-position.y) > this.tcontrol

    },
    /* 下拉加载更多，触发子组件的pullingUp后调用网络请求，加载下一页的内容 */
    showmore(){  
      this.getHomeGoods1(this.type[this.curredtype])
    },
    imgload(){
      // 获得某个组件的高度
      this.tcontrol=this.$refs.tabControl.$el.offsetTop
    },

   
  },
  computed:{
    showGoods(){
      return this.goods[this.type[this.curredtype]].list
    }
  },
 

}
</script>

<style scoped>

.home-nav{
  background-color: var(--color-tint);
  color: white;
  
  
}
#home{
  
  /* padding-top: 44px;  */
  height: 100vh;
  position: relative;
 
}
.contend{
  height: calc(100vh - 93px);
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
.tabControl{
 position: relative;
 z-index: 999;
 background-color: white;
 /* 解决缝隙 */
 top:-1px;
}

</style>