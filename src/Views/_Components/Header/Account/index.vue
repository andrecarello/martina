<template>
  <header class="header:account">
    <oston-image class="header:account-brand" source="oi.png" alt="Oi" />

    <p class="header:account-text">
      <small>CONECTADO COMO</small>
      {{ format(user) }}
    </p>

    <a href="/account/logout" @click.prevent="logout" class="_btn">SAIR</a>
  </header>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
