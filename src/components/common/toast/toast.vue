<template>
  <div class="toast" v-show="isshow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  props:{
    message:{
      type:String,
      default(){
        return ''
      }
    },
    isshow:{
      type:Boolean,
      default(){
        return false
      }
    }
  }

}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  background-color:rgba(0,0,0,.75);
  z-index: 999;
  color: white;
  padding:8px 10px;
  transform: translate(-50%,-50%);
  

}
</style>