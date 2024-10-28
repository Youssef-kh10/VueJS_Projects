<template>
  <div class="layout">
    <Header />
    <div class="content">
      <Sidebar />
      <main>
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex: 1;
}

main {
  flex: 1;
  padding: 20px;
}
</style>