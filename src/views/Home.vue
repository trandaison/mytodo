<template>
  <div class="home">
    <TodoForm :key="myKey" :is-show-all="isShowAll" @create="addNewTodo" @show-all="setShowAll" />

    <div v-if="todoList.length" class="row">
      <transition-group name="flip-list" tag="ul" class="list-group list-group-flush my-3 pe-0">
        <TodoItem v-for="item in todoList" :key="item.id" :item="item" />
      </transition-group>
    </div>
    <p v-else class="text-muted py-5 text-center">No Data :)</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
      myKey: 1,
    };
  },

  computed: {
    ...mapGetters(['filteredTodos']),

    todoList() {
      return this.isShowAll
        ? this.filteredTodos
        : this.filteredTodos.filter((item) => !item.done);
    },
  },

  methods: {
    ...mapActions(['addNewTodo']),

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
