<template lang="html">
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Hello {{name}}!
        </h1>
        <h2 class="subtitle">
          Welcome to the TypeScript and Vue
        </h2>
        <greet :propMessage="name"></greet>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Greet from './components/Greet.vue'

@Component({
  components: {
    Greet
  }
})
export default class App extends Vue {
  public name: string = 'World'
}
</script>
