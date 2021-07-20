import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    cartlist:[]
  },
  actions:{
    addcart(context,payload){
      return new Promise((resolve,reject) =>{
        const temp =context.state.cartlist.find( n => n.iid===payload.iid)
        if(temp){
          context.commit('addCounter',temp)
        }else{
          context.commit('addnew',payload)
        }
        resolve('添加购物车成功')

      })
    }

  },
  mutations:{
    addCounter(state,payload){
      payload.count++
    },
    addnew(state,payload){
      payload.count=1;
      payload.check=true
      state.cartlist.push(payload)

    }
    
  },

})
export default store