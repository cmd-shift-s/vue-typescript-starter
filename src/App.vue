<template lang="html">
  <div>
    <div>Hello {{name}}!</div>
    <greet :propMessage='name'></greet>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Greet from './components/Greet.vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: {
    Greet
  }
})
export default class App extends Vue {
  public name: string = 'World'
}
</script>

<style lang="css">
</style>
