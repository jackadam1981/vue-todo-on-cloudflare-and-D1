<script setup lang="ts">

import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Content from './components/Content.vue'

</script>

<template>
  <div class="body">
    <header class="header">
      <Header />
    </header>
    <main class="main">
      <Content />
    </main>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  background-color: gainsboro;
  font-size: xx-large;
  position: fixed;
  top: 0px;
  height: 50px;
  left: 0px;
  right: 0px;
}

.main {
  background-color: azure;
  font-size: medium;
  position: fixed;
  top: 50px;
  left: 0px;
  bottom: 30px;
  width: 100%;
  overflow: overlay;


}

.footer {
  background-color: orange;
  height: 30px;
  width: 100%;
  position: fixed;
  bottom: 00px;
  left: 0px;
  right: 0px;

}
</style>
