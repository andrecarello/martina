<template>
  <form action="/login/access/pin" @submit.prevent="submit" class="form">
    <h1 class="auth:title">Enviamos um código por SMS para você.</h1>
    <p class="auth:subtitle">Insira o código recebido no campo abaixo.</p>
    <fieldset class="form:group">
      <input
        type="tel"
        class="form:control"
        placeholder="_ _ _ _"
        v-model="pin.value"
        @input="(e) => (pin.value = Masks.pin(e.target.value))"
      />
    </fieldset>
  </form>
</template>

<script src="./index.js"></script>
