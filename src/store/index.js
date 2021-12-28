import { createStore } from 'vuex'

export default createStore({
  state: {
    isSidebarMinimized: false,
    userName: 'itlubber',
  },
  mutations: {
    updateSidebarCollapsedState(state, isSidebarMinimized) {
      state.isSidebarMinimized = isSidebarMinimized
    },
    changeUserName(state, newUserName) {
      state.userName = newUserName
    },
  },
  actions: {
  },
  modules: {
  }
})
