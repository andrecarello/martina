<template>
  <oston-layout class="category:part">
    <oston-header :title="title" to="/categorias" />

    <skeleton v-if="loading" />
    <div class="category:part-container" v-else>
      <div
        class="category:part-item"
        v-for="(magazine, index) in magazines"
        :key="index"
      >
        <router-link
          :to="
            '/revista/' + magazine.id + '/' + slugify(magazine.magazine_name)
          "
        >
          <oston-intersepted-image
            class="category:part-figure"
            :source="
              'https://s3-sa-east-1.amazonaws.com/ost-magazine/' +
              magazine.cover_path
            "
            :alt="magazine.magazine_name"
          />
          <p class="category:part-info" v-if="magazine.editor">
            {{ magazine.editor }}
          </p>
          <h4 class="category:part-title" v-if="magazine.magazine_name">
            {{ magazine.magazine_name }}
          </h4>
        </router-link>
      </div>
    </div>

    <a href="" v-if="loadingMore || page < lastPage" @click.prevent="load" class="_btn _btn:yellow" :class="loadingMore ? '_btn:loading' : ''">
      <span v-if="loadingMore" />
      <span v-else>Carregar mais</span>
    </a>
  </oston-layout>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
