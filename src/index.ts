import Vue from "vue"
import Greet from './components/Greet.vue'

let v = new Vue({
  el: "#app",
  template: `
  <div>
    <div>Hello {{name}}!</div>
    <greet :propMessage="name"></greet>
  </div>`,
  data: {
    name: "World"
  },
  components: {
    Greet
  }
})