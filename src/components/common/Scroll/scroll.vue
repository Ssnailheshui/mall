<template>
  <div class="wrapper" ref="wrap">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default(){
        return 3                                                                                    
      }
    },
    pullUpLoad:{
      type:Boolean,
      default(){
        return false
      }
    },
    data:{
      type:Array,
      default(){
        return
      }
    }

  },
  mounted() { 
    this.scroll= new BScroll(this.$refs.wrap,{
      probeType: this.probeType ,
      click:true,
      pullUpLoad: this.pullUpLoad
    })
      this.scroll.on('scroll',(position) =>{
      //console.log(position)
      this.$emit('scrol',position)
    })
      this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
      this.scroll.finishPullUp()
    })  
    // console.log(this.scroll)
  },
  methods: {
    refresh(){
     // console.log(123)
       console.log(this.scroll)
      this.scroll && this.scroll.refresh()
    }
  },
  watch:{
    data(){
      setTimeout(this.refresh,20)
    }

  }
}
</script>

<style>
     
</style>