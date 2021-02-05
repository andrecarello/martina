<template>
  <oston-layout class="categories">
    <oston-header :showTitle="false" :showSubtitle="false" />

    <div class="categories:content">
      <router-link
        :to="'/categorias/' + category.id + '/' + slugify(category.name)"
        class="categories:item"
        v-for="(category, index) in categories"
        :key="index"
        @click.native="select(category.name, category.id)"
      >
        {{ category.name }}
      </router-link>
    </div>
  </oston-layout>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
