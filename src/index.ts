import Vue from 'vue'
import Greet from './components/Greet.vue'

const app = new Vue({
  template: `
  <div>
    <div>Hello {{name}}!</div>
    <greet :propMessage='name'></greet>
  </div>`,
  data: {
    name: 'World'
  },
  components: {
    Greet
  }
})
app.$mount('#app')
