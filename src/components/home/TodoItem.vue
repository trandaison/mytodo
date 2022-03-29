<template>
  <li class="list-group-item">
    <div class="d-flex justify-content-between align-items-center">
      <span :class="{ 'text-decoration-line-through': item.done }">
        {{ item.text }}
      </span>
      <div class="d-flex align-items-center">
        <input v-model="item.done" type="checkbox" class="form-check-input" />
        <TodoItemActions @delete="onDelete" @move-up="onMoveUp" @move-down="onMoveDown" />
      </div>
    </div>
  </li>
</template>

<script>
import TodoItemActions from './TodoItemActions.vue';

export default {
  name: 'TodoItem',

  components: {
    TodoItemActions,
  },

  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    onDelete() {
      console.log('onDelete');
    },

    onMoveUp() {
      console.log('onMoveUp');
    },

    onMoveDown() {
      console.log('onMoveDown');
    },
  },
};
</script>
