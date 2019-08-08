<template>
  <div id="app">
    <SideBar />
    <div id="content-wrapper" class="d-flex flex-column">
      <TopBar />
      <div class="container-fluid">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/layouts/SideBar/index.vue";
import TopBar from "@/components/layouts/TopBar/index.vue";
export default {
  name: "app",
  components: {
    SideBar,
    TopBar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Muli");
#app {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: #e5e5e5;
  font-family: Muli;
  font-style: normal;
}
#content-wrapper {
  width: 100%;
  overflow-x: hidden;
}
</style>
