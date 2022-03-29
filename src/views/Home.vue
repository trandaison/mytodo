<template>
  <div class="home">
    <div class="row">
      <div class="col-md-6">
        <form class="d-flex" @submit.prevent="addNewTodo">
          <input
            v-model="newTodo"
            type="text"
            class="form-control me-2"
            placeholder="Enter new task..."
          />
          <button type="submit" class="btn btn-success">Add</button>
        </form>
      </div>
      <div class="col-md-6">
        <div class="form-check my-2">
          <input
            id="show-all"
            v-model="isShowAll"
            type="checkbox"
            class="form-check-input"
          />
          <label for="show-all" class="form-check-label">Show Finished</label>
        </div>
      </div>
    </div>

    <div class="row">
      <ul class="list-group list-group-flush my-3 pe-0">
        <li
          v-for="item in filteredTodos"
          :key="item.id"
          :class="{ 'list-group-item': true }"
        >
          <div class="d-flex justify-content-between align-items-center">
            <span :class="{ 'text-decoration-line-through': item.done }">
              {{ item.text }}
            </span>
            <div class="d-flex align-items-center">
              <input v-model="item.done" type="checkbox" class="form-check-input" />
              <div class="dropdown ms-3">
                <span
                  class="btn btn-light dropdown-toggle rounded-circle"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  <i class="fa fa-ellipsis-v"></i>
                </span>

                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                  <li>
                    <span class="dropdown-item">
                      <i class="fa fa-chevron-up me-2"></i> Move Up
                    </span>
                  </li>
                  <li>
                    <span class="dropdown-item">
                      <i class="fa fa-chevron-down me-2"></i> Move Down
                    </span>
                  </li>
                  <li>
                    <span class="dropdown-item">
                      <i class="fa fa-trash me-2"></i> Delete
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { randomId } from '@/utils';

export default {
  name: 'Home',

  data() {
    const todos = [
      { id: randomId(), text: 'Learn Vue.js', done: true },
      { id: randomId(), text: 'Learn Vuex v2', done: false },
      { id: randomId(), text: 'Learn Vue Router', done: false },
    ];
    return {
      isShowAll: false,
      newTodo: '',
      todos,
    };
  },

  computed: {
    filteredTodos() {
      return this.isShowAll ? this.todos : this.todos.filter((item) => !item.done);
    },
  },

  methods: {
    addNewTodo() {
      this.todos.unshift({
        id: randomId(),
        text: this.newTodo,
        done: false,
      });
      this.newTodo = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-item {
  cursor: pointer;
}

.dropdown-toggle {
  @extend .dropdown-item;
  width: 38px;
  background: transparent;
  background-position: center;
  transition: background 0.8s ease-out 100ms;

  &:active {
    background-color: rgba(0, 0, 0, 0.15);
    background-size: 100%;
    transition: background 0s;
  }

  &:after {
    display: none;
  }
}
</style>
