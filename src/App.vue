<template>
  <div id="app">
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import SideBar from "@/components/layouts/SideBar/index.vue";

export default {
  name: "app",
  components: {
    SideBar
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Muli');
#app {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: #e5e5e5;
  font-family: Muli;
  font-style: normal;
}
</style>
