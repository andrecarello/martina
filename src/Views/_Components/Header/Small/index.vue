<template functional>
  <router-link :to="props.to || '/'" class="header:small">
    <feather name="chevron-left" />
    <span class="header:small-title">{{ props.title || 'Voltar' }}</span>
  </router-link>
</template>

<style lang="scss" src="./index.scss"></style>
