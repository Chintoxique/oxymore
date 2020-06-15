<template>
  <div class="mx-64 text-white"  id="app">
    <!-- <div id="nav">
      <router-link to="/">Oxymore</router-link> /
      <router-link to="/archives">Archives</router-link>
    </div> -->
    <h1 @click="smScreen = true" :class="smScreen === true ? 'hidden' : 'block'" class="block lg:hidden">DECROCHE DE TON TELEPHONE</h1>
    <vue-page-transition name="fade">
      <router-view :class="smScreen === true ? 'block' : 'hidden'" class="lg:block" />
    </vue-page-transition>



  </div>
</template>
<script>
    export default {
        components: {

        },
        data() {
            return {
              smScreen: false,
            }
        },
        methods: {
        }
    }
</script>
<style lang="scss">
html {
  background-color: black;
}
</style>
