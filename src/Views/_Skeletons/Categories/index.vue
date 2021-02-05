<template>
  <div class="_skeleton:category">
    <div class="_skeleton:category-container">
      <div class="_skeleton:category-item" v-for="i in 6" :key="i">
        <div class="_skeleton:category-row" v-for="j in 3" :key="j * i" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
