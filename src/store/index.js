import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    search: '',
  },
  actions: {
    addNewTodo({ commit }, newTodo) {
      commit('addNewTodo', newTodo);
    },

    setSearch({ commit }, searchString) {
      commit('setSearch', searchString);
    },

    resetStore({ commit }) {
      commit('resetStore');
    },
  },
  mutations: {
    addNewTodo(state, newTodo) {
      state.todos.unshift(newTodo);
    },

    setSearch(state, value) {
      state.search = value;
    },

    resetStore(state) {
      state.todos = [];
      state.search = '';
    },
  },
  getters: {
    filteredTodos(state) {
      if (state.search) {
        return state.todos.filter(
          (item) => item.text.toLowerCase().includes(state.search.toLowerCase()),
        );
      }

      return state.todos;
    },
  },
});

export default store;
