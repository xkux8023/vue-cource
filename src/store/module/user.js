const state = {
  userName: 'xkux8023'
}

const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}

const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}

const actions = {
  updateUserName ({ commit, state, rootState, dispatch }) {
    // rootState.appName
    dispatch('xxx', '')
  },
  xxx () {
    //
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  modules: {}
}
