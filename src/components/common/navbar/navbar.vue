<template>
  <div class='nav-bar'>
    <div class="left"><slot name='left'></slot></div>
    <div class="center"><slot name='center'></slot></div>
   <div class="right"><slot name='right'></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar{
  /* position: fixed;
  /* padding-bottom: 44px; */
  /* top: 0;
  left: 0;
  right: 0;
  z-index: 9; */ 
  display: flex;
  
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);

  height: 44px;
  text-align: center;
  line-height: 44px;
}

  .left {
    width: 60px;
  }

  .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>