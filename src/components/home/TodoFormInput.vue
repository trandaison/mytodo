<template>
  <form class="d-flex" @submit.prevent="addNewTodo">
    <input
      ref="inputTodoRef"
      v-model="todoText"
      type="text"
      class="form-control me-2"
      placeholder="Enter new task..."
    />
    <button type="submit" class="btn btn-success">Add</button>
  </form>
</template>

<script>
import { randomId } from '@/utils';

export default {
  name: 'TodoFormInput',

  data() {
    return {
      todoText: '',
    };
  },

  created() {
    console.log('created'); // eslint-disable-line
  },

  methods: {
    addNewTodo() {
      this.$emit('create', {
        text: this.todoText,
        id: randomId(),
        done: false,
      });
      this.todoText = '';
    },
  },
};
</script>
