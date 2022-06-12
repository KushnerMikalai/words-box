import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Overlay from './Overlay.vue'

const AXIOM = 'fuck Rem'

describe('overlay.vue', () => {
   test('render test', async () => {
      const wrapper = mount(Overlay, {
         slots: {
            default: AXIOM,
         },
      })
      expect(wrapper.text()).toEqual(AXIOM)

      const testClass = 'test-class'
      await wrapper.setProps({
         overlayClass: testClass,
      })

      expect(wrapper.find(`.${testClass}`)).toBeTruthy()
   })
})
