<template>
  <oston-layout class="home">
    <oston-header />

    <h1 class="home:title">MATÉRIAS EM DESTAQUE</h1>

    <skeleton v-if="loading" />
    <oston-article
      v-else
      v-for="(magazine, index) in magazines"
      :key="index"
      :content="magazine"
    />

    <h3 class="home:title">DESTAQUES</h3>
    <oston-highlights :content="highlights" />
  </oston-layout>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
