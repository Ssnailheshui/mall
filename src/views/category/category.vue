<template>
  <div id="category">
    <navbar class="category-bar">
      <template v-slot:center>
        <div>
          商品分类
        </div>
      </template>
    </navbar>
    <div class="ctent">
      <tab-menu  :categories='categories' @selectItem="selectItem"></tab-menu>
      <scroll  :probe-type="3" :pull-up-load="true" ref="scr1" class="catesroll">     
        <tab-content-category :subcategories="showSubcategory"></tab-content-category>
        <tab-control :title="['综合','新品','销量']" @btnchange="btn" ref="tabControl" ></tab-control> 
         <goods :goods="showCategoryDetail"></goods>
      </scroll>
    </div>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar.vue"
import TabMenu from 'views/category/childComps/TabMenu.vue'
import TabContentCategory from 'views/category/childComps/TabContentCategory'
import {getCategory,getSubcategory,getCategoryDetail} from 'network/category.js'
import scroll from 'components/common/Scroll/scroll.vue'
import TabControl from 'components/content/TabControl.vue';
import goods from 'components/content/goods/goods.vue';
import {decounce} from 'common/utils.js'
export default {
  components:{
    navbar,
    TabMenu,
    TabContentCategory,
    scroll,
    TabControl,
    goods

   
  },
  computed:{
    showSubcategory(){
      if(this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].sub
      
    },
    showCategoryDetail(){ 
      if (this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].categoryDetail[this.type[this.curredtype]]

    }
  },
  methods: {
    getCate(){
      getCategory().then(res =>{
        this.categories=res.data.category.list
       // console.log( this.categories)
        for(let i =0;i < this.categories.length;i++){
          this.categoryData[i]=this.temp
        }
        this.getSubCate(0)
        
      })
    },
    getSubCate(index){
      this.currentIndex = index;
      const mailKey=this.categories[index].maitKey;
      getSubcategory(mailKey).then(res =>{
       // console.log(res)
        this.categoryData[index].sub=res.data
        this.getSuncateDetail('pop')
        this.getSuncateDetail('new')
        this.getSuncateDetail('sell')

      })
    },
    getSuncateDetail(type){
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey,type).then(res =>{
        this.categoryData[this.currentIndex].categoryDetail[type] =res
      })

    },

    selectItem(index){
      this.getSubCate(index)
      this.$refs.scr1.scroll.scrollTo(0,0,0) 
      
    },
    btn(index){
      this.curredtype=index
      console.log(this.type[this.curredtype])
    },
  },
  created() {
    this.getCate() 
  },
  data() {
    return {
      categories:[],
      categoryData:[],
      currentIndex: -1,
      type:['pop','new','sell'],
      curredtype:0,
      temp:{
        sub:{},
        categoryDetail:{
          'pop':[],
          'new':[],
          'sell':[]
        }
      }
    }
  },
  updated() {
    this.$refs.scr1.refresh()
    
  },
  mounted() {
    const re=decounce(this.$refs.scr1.refresh,500)
    this.$bus.$on('showimg',()=>{
      console.log(123)
       this.$refs.scr1 && re()
    })
      
  },

}
</script>

<style scoped>
.catesroll{
  height: calc(100vh - 44px - 49px);
  overflow: hidden; 
}
.category-bar{
  background-color: var(--color-tint);
  color: #fff;

}
.ctent{
  display: flex;
  
}
.catesroll{
  flex: 1;

}
</style>