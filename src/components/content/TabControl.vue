<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" :class="{active: index===currentedIndex}" @click='btn(index)'><span>{{item}}</span></div>

  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentedIndex:0
    }
  },
  methods: {
    // 内部监听点击后需将事件传出外层组件，修改外部组件的数据
    btn(index){
      this.currentedIndex=index
      // 向父组件传递一个自定义事件，事件参数为索引值
      this.$emit('btnchange',index)
      

    }
  },

}
</script>

<style scoped>
.tab-control{
  display: flex;
  justify-content: space-around;
  text-align: center;
  height: 40px;
  line-height: 40px;
  
}
.tab-control span{
  
  padding: 5px;

}
.active{
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-high-text) ;
}
</style>