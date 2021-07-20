<template>
  <tabbar>
    <tabbaritem link="/home" >
      <template v-slot:itemimg>
         <img  src="~assets/img/tabbar/home.svg" >
      </template>
       <template v-slot:itemimgact>
         <img  src="~assets/img/tabbar/home_active.svg" >
      </template>
       <template v-slot:itemtext>
           <div slot='itemtext'>首页</div> -->
      </template>
       <!-- <img slot='itemimg' src="../src/assets/img/tabbar/home.svg" >
       <div slot='itemtext'>首页</div> -->
    </tabbaritem>
    <tabbaritem  link="/category" >
       <img slot='itemimg' src="~assets/img/tabbar/category.svg" >
       <template v-slot:itemimgact>
         <img  src="~assets/img/tabbar/category_active.svg" >
      </template>
       <div slot='itemtext'>分类</div>
    </tabbaritem>
    <tabbaritem  link="/cart" >
       <img slot='itemimg' src="~assets/img/tabbar/shopcart.svg" >
       <template v-slot:itemimgact>
         <img  src="~assets/img/tabbar/shopcart_active.svg" >
      </template>
       <div slot='itemtext'>购物车</div>
    </tabbaritem>
    
    <tabbaritem   link="/profile" >
       <img slot='itemimg' src="~assets/img/tabbar/profile.svg" >
       <template v-slot:itemimgact>
         <img  src="~assets/img/tabbar/profile_active.svg" >
      </template>
       <div slot='itemtext'>我的</div>
    </tabbaritem>
    
  </tabbar>
</template>

<script>
import Tabbar from 'components/common/Tabbar/Tabbar.vue'
import Tabbaritem from 'components/common/Tabbar/Tabbaritem.vue'
export default {
  components:{
    Tabbar,
    Tabbaritem,
  },

}
</script>

<style>

</style>