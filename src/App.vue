<template>
  <div id="app" class="layout:base">
    <keep-alive v-bind:include="['Home', 'Auth']">
      <router-view :key="$route.path" />
    </keep-alive>
  </div>
</template>
<style lang="scss" src="./app.scss"></style>
