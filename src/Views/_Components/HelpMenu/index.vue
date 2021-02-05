<template>
  <div class="helpmenu">
    <div class="helpmenu:content">
      <router-link
        v-for="(link, index) in links"
        :key="index"
        :to="link.href"
        class="helpmenu:link"
        :class="!isActive ? 'helpmenu:link-disabled' : ''"
      >
        <feather :name="link.icon" />
        <span>{{ link.name }}</span>
      </router-link>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
