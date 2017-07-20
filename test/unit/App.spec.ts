import { expect } from 'chai'
import App from '@/App.vue'

describe('App.vue', () => {
  it('should name equals World', done => {
    const vm = new App({
      el: document.createElement('div')
    })

    expect(vm.name).to.equals('World')

    const $el = vm.$el.querySelector('div:first-child')
    expect($el).is.not.be.null
    expect($el.textContent).to.equals('Hello World!')

    vm.name = 'Vue'
    vm.$nextTick(() => {
      expect($el.textContent).to.equals('Hello Vue!')
      done()
    })
  })
})
