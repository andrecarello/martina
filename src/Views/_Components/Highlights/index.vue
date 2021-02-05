<template>
  <section class="_highlights">
    <router-link
      v-for="(highlight, index) in content"
      :key="index"
      :to="'/revista/' + highlight.id + '/' + slugify(highlight.magazine_name)"
      @click.native="select(highlight.id)"
      class="_highlights:item"
    >
      <oston-intersepted-image
        :source="'https://s3-sa-east-1.amazonaws.com/ost-magazine/' + highlight.cover_path"
        :alt="highlight.magazine_name"
        class="_highlights:figure"
      />

      <p class="_highlights:meta">
        <span v-if="highlight.editor">{{ highlight.editor }}</span>
        <span v-if="highlight.date"> | {{ highlight.date }}</span>
      </p>
      <h2 class="_highlights:title" v-text="highlight.magazine_name" />
    </router-link>

    <div class="_highlights:spacer"></div>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
