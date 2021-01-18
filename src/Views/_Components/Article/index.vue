<template>
  <article class="_article">
    <oston-intersepted-image
      class="_article:image"
      :source="'https://s3-sa-east-1.amazonaws.com/ost-magazine/' + content.image_highlights"
      :alt="content.magazine_name"
    />

    <div class="_article:content">
      <div class="_article:a">
        <oston-intersepted-image
          class="_article:brand"
          :source="'https://s3-sa-east-1.amazonaws.com/ost-magazine/' + content.cover_path"
          alt="Revista"
        />
      </div>

      <p class="_article:info">
        <span v-if="content.editor">{{ content.editor }}</span>
        <span v-if="content.date"> | {{ content.date }}</span>
      </p>

      <h2 class="_article:title" v-text="content.theme_title" />
      <p class="_article:description" v-text="content.theme_description" />

      <router-link to="/" class="_button _button:yellow">Ler agora</router-link>
    </div>
  </article>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
