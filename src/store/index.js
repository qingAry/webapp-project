import Vue from 'vue'
import Vuex from 'vuex'
import testData from './modules/testData'

Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
    testData
  }
})