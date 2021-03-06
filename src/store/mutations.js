import vue from 'vue'

const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params
  },
  SET_APP_VERSION (state) {
    // state.appVersion = 'v2.0'
    vue.set(state, 'appVersion', 'v2.0')
  }
}

export default mutations
