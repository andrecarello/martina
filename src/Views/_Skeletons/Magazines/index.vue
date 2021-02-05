<template>
  <div>
    <div class="_skeleton:article" v-for="i in 2" :key="i">
      <div class="_skeleton:article-row" v-for="j in 4" :key="i * j" />
    </div>
  </div>
</template>
<style lang="scss" src="./index.scss"></style>
