<template>
  <div>
    <navbar>
      <template v-slot:left>
        <div @click='backTohome'>
          <img src="~assets/img/common/back.svg" alt="" class="imgback"> 
        </div>
      </template>
      <template v-slot:center> 
        <div class="items">
          <div v-for="(item,index) in tit" :class="{isact:index===currindex}" @click="btnitem(index)">{{item}} </div>
        </div>
      </template>
    
    </navbar>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar.vue'
export default {
  components:{
    navbar
  },
  data() {
    return {
      tit:['商品','参数','评论','推荐'],
      currindex:0
    }
    
  },
  methods: {
    backTohome(){
      this.$router.go(-1)
    },
    btnitem(index){
      this.currindex=index
      this.$emit('curredinex',index)
    }
  },

}
</script>

<style scoped>
.items{
  display:flex;
  justify-content:space-around;
  font-size: 14px;
}
.imgback{
  margin-top: 10px;
}
.isact{
  color: var(--color-high-text);
}
</style>