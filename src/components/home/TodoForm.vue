<template>
  <div class="row">
    <div class="col-md-6">
      <TodoFormInput v-if="enableInput" v-on="$listeners" />
      <button v-else class="btn btn-outline-success" @click="showInput">Create</button>
    </div>
    <div class="col-md-6">
      <div class="form-check my-2">
        <input
          id="show-all"
          type="checkbox"
          class="form-check-input"
          :checked="isShowAll"
          @change="updateIsShowAll"
        />
        <label for="show-all" class="form-check-label">Show Finished</label>
      </div>
    </div>
  </div>
</template>

<script>
import TodoFormInput from './TodoFormInput.vue';

export default {
  name: 'TodoForm',

  components: {
    TodoFormInput,
  },

  props: {
    isShowAll: {
      type: Boolean,
      requried: true,
    },
  },

  data() {
    return {
      todoText: '',
      enableInput: false,
    };
  },

  methods: {
    updateIsShowAll(event) {
      this.$emit('show-all', event.target.checked);
    },

    async showInput() {
      this.enableInput = true;
      // await this.$nextTick();
      // this.$refs.inputTodoRef.focus();
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
