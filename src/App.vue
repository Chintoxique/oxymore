<template>
  <div class="mx-64 text-white"  id="app">
    <div id="nav">
      <router-link to="/">Oxymore</router-link> /
      <router-link to="/archives">Archives</router-link>
    </div>
    <vue-page-transition name="fade">
      <router-view/>
    </vue-page-transition>



  </div>
</template>

<style lang="scss">
html {
  background-color: black;
}
</style>
