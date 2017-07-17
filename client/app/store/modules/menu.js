/**
 * Created by lichb on 2017/2/7.
 */
import {TOGGLE_MAIN_MENU} from '../mutation-types'

import Util from '../../libs/util'

// initial state
const state = {
  isFold: false,
  spanLeft: 5,
  spanRight: 19,
}

// getters
const getters = {
  menuIsFold: state => state.isFold,
}

//actions
const actions = {
  toggleMenu({commit}){
    Util.log("toggleMenu...")
    commit(TOGGLE_MAIN_MENU)
  },
  pathTitle({commit}, titles) {
  
    Util.log("pathTitle...",titles)
  }
}

//mutations
const mutations = {
  [TOGGLE_MAIN_MENU] (state) {
    state.isFold = !state.isFold
  },
}

//export
export default {
  state,
  getters,
  actions,
  mutations
}
