<script setup lang="ts">

import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
const msg = 'hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!'

</script>

<template>
  <header class="header">
    <Header />
  </header>

  <main class="main">
    {{ msg }}
  </main>
  <footer class="footer">
    <Footer />
  </footer>
</template>

<style scoped>
.header {
  background-color: gainsboro;
  font-size: xx-large;
}

.main {
  background-color: azure;
  font-size: medium;
  position: absolute;
  top: 50px;
  bottom: 45px;
  height: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

}

.footer {
  background-color: beige;
  font-size: x-large;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 45px;
  width: 100%;
}
</style>
