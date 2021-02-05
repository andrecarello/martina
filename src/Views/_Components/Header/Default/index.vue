<template>
  <header class="header">
    <oston-image class="header:brand" source="oi.png" alt="Oi" />

    <h1 class="header:title" v-if="showTitle">Bem-vindo ao <span>{{ PROJECT_NAME }}</span></h1>

    <p class="header:text" v-if="showSubtitle">
      As melhores <span>REVISTAS DE ESPORTES</span> para você.
    </p>
  </header>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
