<template>
  <!-- <HeaderFile />
  <SideBar />
  <DashCards />
  <HomePage /> -->
  <div class="app">
    <!-- <HeaderFile class="mb-10" /> -->
    <SideBar />
    <router-view />
  </div>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import SideBar from './components/SideBar.vue';
// import HeaderFile from './components/Header.vue';
// import DashCards from './components/DashCards.vue';
// import HomePage from './components/HomePage.vue';
</script>

<style>
.app {
  background-color: #000000;
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>
