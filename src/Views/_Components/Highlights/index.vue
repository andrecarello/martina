<template>
  <section class="_highlights">
    <div
      v-for="(highlight, index) in highlights"
      :key="index"
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
    </div>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
