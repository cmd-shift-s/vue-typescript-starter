<template>
  <button class="button" @click="greet()">
    Greeting
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Greet extends Vue {
  @Prop()
  propMessage: string

  // initial data
  msg: string = `Hello ${this.propMessage}`

  // method
  greet () {
    alert('greeting: ' + this.msg)
  }
}
</script>
