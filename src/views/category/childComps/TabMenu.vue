<template>
  
  <scroll id='tab-menu'  :probe-type="3" :pull-up-load="true" ref="scr">
  
    <div class="menu-list-item" v-for="(item ,index) in categories" 
    :key='index' 
    @click="itemClick(index)"
    :class="{active:index===curredIndex}"
    >{{item.title}} 
    </div>
 
  </scroll>
 
</template>

<script>
import scroll from 'components/common/Scroll/scroll.vue'
export default {
  components:{
    scroll
  },
  props:{
    categories:{
      typr:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      curredIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.curredIndex=index
      this.$emit('selectItem', index)
    }
  },
  updated() {
    this.$refs.scr.refresh()
    
  },

}
</script>

<style scoped>
#tab-menu{
  width: 100px;
  background-color: #f6f6f6;
  height: calc(100vh - 44px - 49px);
  overflow: hidden; 
}

.active{
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
  font-weight: 700;
  
}
.menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
}

</style>