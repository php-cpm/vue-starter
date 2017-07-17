/**
 * Created by lichb on 2017/2/7.
 */
import {LOGIN_IN, LOGIN_OUT} from '../mutation-types'
import tokens from '../../apis/tokens'
import Util from '../../libs/util'

// initial state
const state = {
  tokens: '',
  username: ''
}

// getters
const getters = {
  tokens: state => state.tokens,
  username: state => state.username
}

//actions
const actions = {
  async checklogin({commit, state}){
    Util.log('checking login...')
    let data = await tokens.checkTokens();
  
    Util.debug('login data', data)
    //success
    if(data && data.data && data.data.status == 200) {
      commit(LOGIN_IN, {username: data.data.data && data.data.data.user || ''})
    }else{
      //fail
      commit(LOGIN_IN, {username: ''})
    }
  },
  login({commit, state}, user){
    Util.log('login...')
    tokens.getTokens(user.name, user.pass).then((data) => {
      //success
      Util.log(data.data)
      if(data.status == 200 && data.data && data.data.status == 200) {
        commit(LOGIN_IN, {username: data.data.data.user})
      }else{
        //fail
        commit(LOGIN_IN, {username: ''})
      }
    }, (error) => {
      //fail
      commit(LOGIN_IN, {username: ''})
    })
  },
  logout({commit}){
    Util.log("logout...")
    tokens.logout();
    commit(LOGIN_OUT)
  }
}

//mutations
const mutations = {
  [LOGIN_IN] (state, {username}) {
    if(!username) {
      vue.$Message.error("认证失败")
      return
    }
    Util.log("loged...", username )
    state.username = username
  },
  [LOGIN_OUT] (state) {
    state.username = ''
  }
}

//export
export default {
  state,
  getters,
  actions,
  mutations
}
