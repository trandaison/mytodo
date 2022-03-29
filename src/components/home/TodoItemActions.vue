<template>
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
        <span class="dropdown-item" @click="onClickHandler('move-up')">
          <i class="fa fa-chevron-up me-2"></i> Move Up
        </span>
      </li>
      <li>
        <span class="dropdown-item" @click="onClickHandler('move-down')">
          <i class="fa fa-chevron-down me-2"></i> Move Down
        </span>
      </li>
      <li>
        <span class="dropdown-item" @click="onClickHandler('delete')">
          <i class="fa fa-trash me-2"></i> Delete
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoItemActions',

  methods: {
    onClickHandler(action) {
      this.$emit(action);
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
