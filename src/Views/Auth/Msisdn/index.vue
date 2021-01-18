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

    <oston-list-menu />
    <oston-help-menu />
  </oston-layout>
</template>

<script src="./index.js"></script>
