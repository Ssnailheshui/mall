<template>
  <div class="recomm">
    <div v-for="item in recomm">
      <a :href="item.link">
        <img :src="item.image" alt="">
        {{item.title}}
      </a>
      <!-- <img :src="item.img">
      {{item.name}} -->
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recomm:{
      type:Array,
      default(){
        return []
      }
    }
  }

}
</script>

<style>
.recomm{
  display: flex;
  justify-content:space-between;
  text-align: center;
  margin: 10px 0;
  padding-bottom: 20px;
  border-bottom: 8px solid #eee;
}
.recomm img{
  width: 75px;
}
</style>