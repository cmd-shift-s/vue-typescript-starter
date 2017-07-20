import { expect } from 'chai'
import Greet from '@/components/Greet.vue'

describe('Greet.vue', () => {
  it('should msg equals 123', () => {
    const vm = new Greet({
      el: document.createElement('div')
    })

    expect(vm.msg).to.equals(123)
  })
})
