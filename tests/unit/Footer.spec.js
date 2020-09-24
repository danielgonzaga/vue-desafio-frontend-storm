import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Footer, {      
    })
  })

  it('should create', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should have 3 icons', () => {
    expect(wrapper.findAll('v-icon')).toHaveLength(3)
  })
})
