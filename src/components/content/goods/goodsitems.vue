<template>
  <div class="goods-item" @click="btngooditem">
    <img v-lazy="imgurl" alt="" @load="showimg" :key='imgurl'>
    <div class="goods-info">
      <p>{{gooditem.title}}</p>
      <span class="price">{{gooditem.price}}</span>
      <span class="collect">{{gooditem.cfav}}</span>
    </div>

  </div>
</template>

<script>
export default {
  props:{
    gooditem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    showimg(){
      this.$bus.$emit('showimg')
    },
    btngooditem(){
      this.$router.push('/detail/'+this.gooditem.iid)
    }
  },
  computed:{
    imgurl(){
      
      return this.gooditem.show ? this.gooditem.show.img : this.gooditem.img
    }
  }

}
</script>

<style scoped>
.goods-item {
    padding-bottom: 40px;
    position: relative;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    /* 溢出显示省略号 */
    text-overflow: ellipsis;
    /* 禁止换行 */
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>