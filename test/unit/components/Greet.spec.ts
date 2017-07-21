import { expect } from 'chai'
import faker from 'faker'
import Greet from '@/components/Greet.vue'

describe('Greet.vue', () => {
  it('should msg equals 123', () => {
    const vm = new Greet({
      el: document.createElement('div')
    })

    expect(vm.msg).to.be.a('string').and.equals('123')
  })

  it('should returns changed computedMsg', () => {
    const vm = new Greet({
      el: document.createElement('div')
    })

    const msg = vm.msg
    expect(vm.computedMsg).to.equals(`computed ${msg}`)

    vm.msg = faker.lorem.sentence()
    expect(vm.computedMsg).to.not.equals(`computed ${msg}`)
  })
})
