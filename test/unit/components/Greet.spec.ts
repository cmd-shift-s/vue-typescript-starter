import { expect } from 'chai'
import { div } from '../utils'
import * as faker from 'faker'
import Greet from '@/components/Greet.vue'

describe('Greet.vue', () => {
  it('msg는 Hello Vue와 같다.', () => {
    const propMessage = 'Vue'
    const vm = new Greet({
      el: div,
      propsData: {
        propMessage
      }
    })

    expect(vm.msg).to.be.a('string').and.equals(`Hello ${propMessage}`)
  })
})
