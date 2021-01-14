<template>
  <oston-layout class="auth">
    <oston-header />
    <p class="auth:text">Entre com o seu número Oi ou seu CPF</p>

    <div class="auth:options">
      <a
        @click.prevent.stop="method = 'phone'"
        href="/login/method/phone"
        class="auth:option"
        :class="method === 'phone' ? 'auth:option-active' : ''"
        >CELULAR OI</a
      >
      <a
        @click.prevent.stop="method = 'cpf'"
        href="/login/method/cpf"
        class="auth:option"
        :class="method === 'cpf' ? 'auth:option-active' : ''"
        >CPF</a
      >
      <a
        @click.prevent.stop="method = 'fibra'"
        href="/login/method/fibra"
        class="auth:option"
        :class="method === 'fibra' ? 'auth:option-active' : ''"
        >OI FIBRA</a
      >
    </div>
    <oston-form-login :method="method" />
    <oston-list-menu />
    <oston-help-menu />
  </oston-layout>
</template>

<script src="./index.js"></script>
