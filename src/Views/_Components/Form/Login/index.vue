<template>
  <form action="/login/access" @submit.prevent="submit" class="form">
    <fieldset class="form:group" v-if="method === 'phone'">
      <label class="form:label">(DDD) + NÚMERO</label>
      <input
        type="tel"
        class="form:control"
        placeholder="( __ ) _____.____"
        v-model="msisdn.value"
        @input="(e) => (msisdn.value = Masks.msisdn(e.target.value))"
      />
    </fieldset>

    <fieldset
      v-else-if="method === 'cpf'"
      class="form:group"
      :class="cpf.error ? 'form:group-error' : ''"
    >
      <label class="form:label">CPF</label>
      <input
        type="tel"
        class="form:control"
        placeholder="___.___.___-__"
        v-model="cpf.value"
        @input="(e) => validate('cpf', e.target.value)"
      />
    </fieldset>

    <p
      v-if="cpf.error && method === 'cpf'"
      v-text="cpf.message"
      class="form:message"
    />

    <button type="submit" class="_button">Continuar</button>
  </form>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
