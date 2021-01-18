<template>
  <div class="helpmenu">
    <div class="helpmenu:content">
      <router-link to="/" class="helpmenu:link">
        <faether-home-icon />
        <span>INÍCIO</span>
      </router-link>
      <router-link to="/categorias" class="helpmenu:link">
        <faether-package-icon />
        <span>CATEGORIAS</span>
      </router-link>
      <router-link to="/explorar" class="helpmenu:link">
        <faether-compass-icon />
        <span>EXPLORAR</span>
      </router-link>
      <router-link to="/conta" class="helpmenu:link">
        <faether-user-icon />
        <span>CONTA</span>
      </router-link>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
