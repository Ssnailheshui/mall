<template>
<div id="profile">
  <navbar class="profile-bar">
    <template v-slot:center>
      <div>
        我的档案
      </div>
    </template>
  </navbar>
  <user-info></user-info>
  <account-info></account-info>
  <normal-list-view :listData="orderList"></normal-list-view>
  <normal-list-view :listData="serviceList"></normal-list-view>
</div>
 
</template>

<script>
import navbar from 'components/common/navbar/navbar.vue'
import UserInfo from 'views/profile/childComps/UserInfo.vue'
import AccountInfo from 'views/profile/childComps/AccountInfo.vue'
import NormalListView from 'views/profile/childComps/NormalListView.vue'
export default {
  components:{
    navbar,
    UserInfo,
    AccountInfo,
    NormalListView
  },
  data() {
    return {
      orderList:[
        {icon:'message.svg',info:'我的消息'},
        {icon: 'pointer.svg', info: '积分商城'},
			  {icon: 'vip.svg', info: '会员卡'},
      ],
      serviceList: [
			  {icon: 'cart.svg', info: '我的购物车'},
			  {icon: 'shopping.svg', info: '下载购物APP'},
		  ]

    }
  },

}
</script>

<style scoped>
.profile-bar{
  background-color: var(--color-tint);
  color: white;

}
  #profile {
    background-color: #f2f2f2;
  }
</style>