import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import _ from 'lodash';
const STATE = {
  	postContent : '',
	postTitle: ''
};

const MUTATIONS = {
  postContent (state,value) {
    state.postContent = value;
  },
  postTitle (state,value) {
	  state.postTitle = value;

  }
}

const GETTERS = {
  postContent: state =>{
    return _.isString( state.postContent ) ? state.postContent : '';
  },
  postTitle: state =>{
    return _.isString( state.postTitle ) ? state.postTitle : '';
  },
};

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  strict: true,
  plugins: [],
  modules: {},
  state: STATE,
  getters: {},
  mutations: MUTATIONS,
  actions: {}
})

export default store
