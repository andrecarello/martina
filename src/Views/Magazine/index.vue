<template>
  <oston-layout class="magazine" v-if="!reading">
    <oston-header />

    <skeleton v-if="loading" />
    <div class="magazine:content" v-else>
      <oston-intersepted-image
        class="magazine:figure"
        :container="true"
        :source="magazine.cover_path"
        :alt="magazine.magazine_name"
      />

      <p class="magazine:info">
        <span v-if="magazine.editor">{{ magazine.editor }}</span>
        <span v-if="magazine.date"> | {{ magazine.date }}</span>
      </p>

      <h1 class="magazine:title" v-text="magazine.magazine_name" />

      <p class="magazine:description" v-text="magazine.magazine_description" />

      <a href="" class="_btn _btn:yellow" @click.prevent="read()">Ler agora</a>
      <a href="" class="_btn">Ver edições anteriores</a>
    </div>
  </oston-layout>
  <oston-reader v-else />
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
