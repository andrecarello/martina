<template>
  <div :class="'layout:' + layout">
    <slot></slot>

    <oston-help-menu v-if="menu" />
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
