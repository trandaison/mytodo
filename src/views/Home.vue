<template>
  <div class="home">
    <TodoForm :key="myKey" :is-show-all="isShowAll" @create="addNewTodo" @show-all="setShowAll" />

    <div class="row">
      <transition-group name="flip-list" tag="ul" class="list-group list-group-flush my-3 pe-0">
        <TodoItem v-for="item in filteredTodos" :key="item.id" :item="item" />
      </transition-group>
    </div>
  </div>
</template>

<script>
import { randomId } from '@/utils';
import TodoForm from '@/components/home/TodoForm.vue';
import TodoItem from '@/components/home/TodoItem.vue';

export default {
  name: 'Home',

  components: {
    TodoForm,
    TodoItem,
  },

  data() {
    return {
      isShowAll: true,
      todos: [],
      myKey: 1,
    };
  },

  computed: {
    filteredTodos() {
      return this.isShowAll ? this.todos : this.todos.filter((item) => !item.done);
    },
  },

  created() {
    this.todos = [
      { id: randomId(), text: 'Learn Vue.js', done: true },
      { id: randomId(), text: 'Learn Vuex v2', done: false },
      { id: randomId(), text: 'Learn Vue Router', done: false },
    ];
  },

  methods: {
    addNewTodo(newTodo) {
      this.todos.unshift(newTodo);
    },

    setShowAll(value) {
      this.isShowAll = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.flip-list-move {
  transition: transform 0.6s;
}
</style>
