<template>
  <div id="app">
    <HeaderBar />
    <div class="bg-gray">
      <div class="container bg-white py-3 main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';

export default {
  name: 'App',

  components: {
    HeaderBar,
  },
};
</script>

<style lang="scss">
body {
  overflow: hidden scroll;
}

.bg-gray {
  background-color: #E1E1E1;
}

.main-content {
  min-height: calc(100vh - 57px);
}

.header-search {
  .form-control {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .btn[type="submit"] {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
