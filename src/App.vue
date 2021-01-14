<template>
  <div id="app" class="layout:base">
    <keep-alive>
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>
<style lang="scss" src="./app.scss"></style>
