<template>
  <oston-layout class="explorer">
    <form class="explorer:form">
      <feather name="search" />
      <input
        type="text"
        placeholder="Buscar"
        v-model="form.term"
        @input="search"
      />
      <a href="" v-if="form.term.length > 0" @click.prevent="reset">
        <feather name="x" />
      </a>
    </form>

    <div v-if="results.length > 0" class="explorer:container">
      <div class="explorer:result">
        <article
          v-for="(result, index) in results"
          :key="index * Math.random()"
          class="explorer:article"
        >
          <router-link
            :to="'/revista/' + result.id + '/' + slugify(result.magazine_name)"
          >
            <oston-image
              :container="true"
              :source="
                'https://s3-sa-east-1.amazonaws.com/ost-magazine/' +
                result.cover_path
              "
              :alt="result.magazine_name"
              class="explorer:article-figure"
            />

            <p class="explorer:article-info" v-text="result.editor" />
            <h1 class="explorer:article-title" v-text="result.magazine_name" />
          </router-link>
        </article>
      </div>

      <div
        :href="'/explorer/search/page' + page"
        class="_btn _btn:yellow"
        @click.prevent.stop="more"
        v-if="page < lastPage"
        :class="loading ? '_btn:loading' : ''"
      >
        <span v-if="loading" />
        <span v-else>Carregar mais</span>
      </div>
    </div>

    <div class="explorer:container" v-else>
      <h3 class="explorer:title">Publicados Recentemente</h3>
      <oston-highlights :content="news" class="explorer:items"/>

      <hr class="explorer:rule" />
      <h3 class="explorer:title">Estilo de Vida</h3>
      <oston-highlights :content="unique" class="explorer:items" />
    </div>
  </oston-layout>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
