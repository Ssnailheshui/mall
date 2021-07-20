<template>
  <div class='feature'>
    <!-- <div class="tit">本周流行</div>
    <div class="popular">
        <div>
      <a href="#">
      <img :src="popu&&popu[0].image" alt="">
      <div>霸街长袖裙</div>
      </a>
    </div>
    <div>
      <a href="#">
      <img :src="popu&&popu[1].image" alt="">
      <div>时尚懒人套装</div>
      </a>
    </div>
    <div>
      <a href="#">
      <img :src="popu&&popu[2].image" alt="">
      <div>微胖遮肉穿搭</div>
      </a>
    </div>
    <div>
      <a href="#">
      <img :src="popu&&popu[3].image" alt="">
      <div>降温保暖鞋</div>
      </a>
    </div>
    <div>
      <a href="#">
      <img :src="popu&&popu[0].image" alt="">
      <div>颜值爆表套裙装</div>
      </a>
    </div>
    <div>
      <a href="#">
      <img :src="popu&&popu[1].image" alt="">
      <div>小心机V领</div>
      </a>
    </div>
    <div>
      <a href="#">
      <img :src="popu&&popu[2].image" alt="">
      <div>万圣节必备口红</div>
      </a>
    </div>
    <div>
      <a href="#">
      <img :src="popu&&popu[3].image" alt="">
      <div>软萌暖心包包</div>
      </a>
    </div>
    </div>
   -->
   <a href="https://act.mogujie.com/zzlx67">
   <img src="~assets/img/home/recommend_bg.jpg" alt=""></a>
  </div>
</template>

<script>
export default {
  props:{
    popu:{
      type:Array,
      default(){
        return []
      }
    }
  }

}
</script>

<style>
/* .tit{
  text-align: center;
  margin-bottom: 15px;
}
.popular{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px 0;
  font-size: 12px;
  text-align:center
}
.popular img{
  width: 50px;
} */
.feature img{
  width: 100%;
}
</style>