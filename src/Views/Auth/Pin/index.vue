<template>
  <oston-layout>
    <oston-header to="/login" class="_g:clicable" />
    <form
      action="/login/access/pin"
      @submit.prevent="submit"
      class="form auth:pin"
    >
      <h1 class="auth:title">Enviamos um código por SMS para você.</h1>
      <p class="auth:subtitle">Insira o código recebido no campo abaixo.</p>
      <fieldset class="form:group">
        <input
          type="tel"
          class="form:control-pin"
          placeholder="_ _ _ _"
          v-model="pin.value"
          @input="(e) => validate(e.target.value)"
        />
      </fieldset>

      <div class="auth:links-vertical">
        <a
          href="/login/request/pin"
          @click.prevent.stop="requestPin"
          class="auth:link"
          :class="sending ? '_g:disabled' : ''"
        >
          <faether-reload-icon
            size="10"
            class="auth:link-icon"
            :class="sending ? 'anim:rotate' : ''"
          />
          <span v-text="sending ? 'Aguarde...' : 'Enviar novo código'" />
        </a>
      </div>
    </form>
    <oston-help-menu />
  </oston-layout>
</template>

<script src="./index.js"></script>
