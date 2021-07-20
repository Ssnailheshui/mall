<template>
  <div id="app">
   
     <maintabbar></maintabbar>
    
   
     <keep-alive exclude="detail">
     <router-view></router-view>
    </keep-alive>
  
  </div>
</template>

<script>

import maintabbar from '../src/components/content/maintabbar'

export default {
  name: 'App',
  components:{
    maintabbar,
    
  },
  
}
</script>


<style>
  @import "assets/css/base.css";
 
</style>