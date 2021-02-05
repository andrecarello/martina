<template>
  <div class="reader">
    <nav class="reader:menu">
      <a
        href="/magazine/back"
        class="reader:menu-link"
        @click.prevent.stop="$parent.reading = false"
      >
        <feather name="x" />
      </a>

      <a
        :href="'/magazine/fav/' + magazine.id"
        class="reader:menu-link"
        @click.prevent="favorite('post', magazine.id)"
      >
        <feather name="heart" />
      </a>

      <a
        :href="'/reader/page/' + 3"
        class="reader:menu-link"
        :class="page === 0 || loading ? 'reader:prev-disabled' : ''"
        @click.prevent.stop="prev"
      >
        <feather name="chevron-left" />
      </a>
      <div class="reader:counter">{{ page + 1 }} de {{ totalPages + 1 }}</div>
      <a
        :href="'/reader/page/' + 1"
        class="reader:menu-link"
        :class="page === totalPages || loading ? 'reader:prev-disabled' : ''"
        @click.prevent.stop="next"
      >
        <feather name="chevron-right" />
      </a>
    </nav>
    <div class="reader:content">
      <div class="reader:loading" v-if="loading">
        <i
          v-if="loadedRatio > 0 && loadedRatio < 1"
          :style="{ width: 1 + loadedRatio * 100 + '%' }"
          :aria-valuenow="Math.floor(loadedRatio * 100) + '%'"
        />
      </div>
      <pdf-reader
        :src="content"
        @loaded="loading = false"
        @progress="loadedRatio = $event"
      ></pdf-reader>
      <!-- <oston-reader-bookmark /> -->
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
