<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name:"Tabbar"

}
</script>

<style>
.tabbar{
  display: flex;
  justify-content:space-around;
  background-color: #f6f6f6;
  z-index: 9;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,0.3);
}

</style>