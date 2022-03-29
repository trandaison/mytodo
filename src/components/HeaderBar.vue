<template>
  <div class="navbar navbar-expand-md navbar-light bg-light border-bottom">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/logo.png" alt="Logo" height="24" />
        MyTodo
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
        <form class="d-flex header-search">
          <input v-model="search" type="search" class="form-control" placeholder="Search..." />
          <button type="submit" class="btn btn-success">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',

  computed: {
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.dispatch('setSearch', value);
      },
    },
  },
};
</script>
