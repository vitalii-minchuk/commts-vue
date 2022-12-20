<script lang="ts">
import Header from './components/Header.vue';


export default {
  components: { Header }
}
</script>

<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
