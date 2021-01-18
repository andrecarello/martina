<template>
  <oston-layout class="home">
    <oston-header />

    <h1 class="home:title">MATÉRIAS EM DESTAQUE</h1>

    <oston-article
      v-for="(magazine, index) in magazines"
      :key="index"
      :content="magazine"
    />

    <h3 class="home:title">DESTAQUES</h3>
    <oston-highlights />
    <oston-help-menu />
  </oston-layout>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
